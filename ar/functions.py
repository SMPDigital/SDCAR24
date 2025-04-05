import json
import shutil
import os.path
import re
import inquirer
import math
import PyPDF2
from bs4 import BeautifulSoup
import chardet  # Detect encoding

structureFile = "assets/js/structure.json"
searchIndexFile = "assets/js/search_index.json"
pdfPath = "services/pdf"

# Detect encoding of structure.json
with open(structureFile, "rb") as f:
    raw_data = f.read()

encoding = chardet.detect(raw_data)["encoding"]
print(f"Detected Encoding: {encoding}")  # Debugging purpose

# Read structure.json without modifying 'name' properties
with open(structureFile, "r", encoding=encoding) as file:
    structure = json.load(file)


def folderStructureGenerate():
    fileToCopy = input("Enter the path of the HTML file you want to copy: ")

    if os.path.exists(fileToCopy):

        print("\n📁 Generating folders and blank PDFs based on 'structure.json'...\n")

        count = 0  # Count of created files

        def makeFolders(pages, path):
            nonlocal count

            for page in pages:

                slug = _generateSlug(page["name"])

                if "slug" in page and page["slug"] != "#":
                    newPath = f"{path}/{slug}" if path == "" else path
                    newPath = newPath[1:]

                    os.makedirs(f"{newPath}", exist_ok=True)

                    if not os.path.exists(f"{newPath}/{slug}.html"):
                        shutil.copy(fileToCopy, f"{newPath}/{slug}.html")
                        createBlankPDF(f"{pdfPath}/{slug}.pdf")
                        print(f"✅ {page['name']} - {page['slug']}")
                        count += 1
                    else:
                        print(f"❌ {page['name']} - {page['slug']} (Already exists)")

                if "children" in page:
                    newPath = f"{path}/{slug}"
                    makeFolders(page["children"], newPath)

        def createBlankPDF(outputFilePath):
            pdfWriter = PyPDF2.PdfWriter()
            pdfWriter.add_blank_page(width=595, height=842)

            os.makedirs(pdfPath, exist_ok=True)

            with open(outputFilePath, 'wb') as blankfile:
                pdfWriter.write(blankfile)

        makeFolders(structure, "")

        print(f"\n{count} files generated.\n")

    else:
        print("❌ File does not exist. Please enter a correct file path.")


def generatePDFs():
    fileToBreak = input("Enter the path of the PDF file you want to split: ")

    if os.path.exists(fileToBreak):

        print("📃 Generating PDF files based on 'structure.json'...\n")

        def makePDFs(pages):

            def extractPages(inputPath, outputPath, startPage, endPage):
                with open(inputPath, 'rb') as file:
                    pdfReader = PyPDF2.PdfReader(file)
                    pdfWriter = PyPDF2.PdfWriter()

                    for page_num in range(startPage - 1, endPage):
                        pdfWriter.add_page(pdfReader.pages[page_num])

                    os.makedirs(pdfPath, exist_ok=True)

                    with open(outputPath, 'wb') as output_file:
                        pdfWriter.write(output_file)

            for page in pages:
                if "children" in page:
                    makePDFs(page["children"])

                if "pdf" in page:
                    slug = page["slug"].split("/")[-1].replace(".html", "")

                    inputPath = fileToBreak
                    outputPath = f"{pdfPath}/{slug}.pdf"

                    if "-" in page["pdf"]:
                        startPage, endPage = map(int, page["pdf"].split("-"))
                    else:
                        startPage = endPage = int(page["pdf"])

                    extractPages(inputPath, outputPath, startPage, endPage)

                    fileSize = math.ceil(os.path.getsize(outputPath) / 1024)
                    page["pdfsize"] = f"{fileSize} KB"

                    print(f"✅ {page['name']} - {fileSize} KB")

            # Write updated JSON while preserving 'name'
            with open(structureFile, "w", encoding=encoding) as jsonfile:
                json.dump(structure, jsonfile, indent=2, ensure_ascii=False)

        makePDFs(structure)

    else:
        print("❌ File does not exist. Please enter a correct file path.")


def generateSearchIndex():
    print("🔍 Generating the search_index.json file...\n")

    searchIndex = []

    def readFile(pages):
        for page in pages:
            if "slug" in page and page["slug"] != "#":
                with open(page["slug"], "r", encoding="utf-8") as file:
                    htmlContent = file.read()

                soup = BeautifulSoup(htmlContent, "html.parser")
                mainTag = soup.find("section", {"class": "page-content"})

                if mainTag:
                    text = mainTag.get_text(separator=" ")
                    text = re.sub(r"\s+", " ", text).strip()

                    searchIndex.append(
                        {"name": page["name"], "slug": page["slug"], "content": text}
                    )
                    print(f"✅ {page['name']}")
                else:
                    print("Main tag not found in the HTML.")

            if "children" in page:
                readFile(page["children"])

    readFile(structure)

    with open(searchIndexFile, "w", encoding=encoding) as json_file:
        json.dump(searchIndex, json_file, indent=4, ensure_ascii=False)


def _generateSlug(name):
    replaced_and_string = name.replace("&", "and")
    cleaned_string = re.sub(r"[^a-zA-Z0-9 ]", "", replaced_and_string)
    formatted_string = cleaned_string.replace(" ", "_").lower()

    return formatted_string


if not os.path.exists(structureFile):
    print("❌ 'assets/js/structure.json' does not exist.")
else:
    message = "Select an option"
    choices = ["Create Folder Structure", "Break PDF", "Generate Search Index"]
    questions = [inquirer.List("choice", message=message, choices=choices)]
    answers = inquirer.prompt(questions)

    if answers["choice"] == "Create Folder Structure":
        folderStructureGenerate()

    if answers["choice"] == "Break PDF":
        generatePDFs()

    if answers["choice"] == "Generate Search Index":
        generateSearchIndex()
