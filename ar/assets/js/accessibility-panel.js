let accessibilityPropeties = {
  zoomLevel: 0,
  readingMaskActive: false,
  screenReaderActive: false,
  highlightLinkActive: false,
  invertColorsActive: false,
};

// Zoom text
function zoomLevelIncrement() {
  if (accessibilityPropeties.zoomLevel >= 3) {
    accessibilityPropeties.zoomLevel = 0;
  } else {
    accessibilityPropeties.zoomLevel = accessibilityPropeties.zoomLevel + 1;
  }

  updatePropeties(true);
}

function zoomText() {
  let elementsToZoom = $(".enalrgable");
  let tooltipElem = $("#zoom_text .panel_box_icon");

  elementsToZoom.removeClass("ap_zoom");
  elementsToZoom.removeAttr("data-zoom");
  tooltipElem.attr("tooltip", "Bigger Text");

  if (accessibilityPropeties.zoomLevel > 0) {
    elementsToZoom.addClass("ap_zoom");
    elementsToZoom.attr("data-zoom", accessibilityPropeties.zoomLevel);

    tooltipElem.attr(
      "tooltip",
      `Bigger Text ${accessibilityPropeties.zoomLevel}x`
    );
  }
}

// Reading mask
function openReadingMask(update) {
  if (update) {
    accessibilityPropeties.readingMaskActive =
      !accessibilityPropeties.readingMaskActive;
    updatePropeties(true);
    $(".reading_mask").toggleClass("activated");
    return;
  }

  if (accessibilityPropeties.readingMaskActive) {
    $(".reading_mask").addClass("activated");
  }
}

function readingMaskMove(element) {
  if (accessibilityPropeties.readingMaskActive) {
    const maskHeight = 150;
    let masksTop = $(".reading_mask_top");
    let masksBottom = $(".reading_mask_bottom");

    let mouseY = element.clientY;
    let topHeight = mouseY - maskHeight / 2;
    let bottomHeight = window.innerHeight - mouseY - maskHeight / 2;

    gsap.to(masksTop, {
      height: topHeight,
      duration: 0,
    });

    gsap.to(masksBottom, {
      height: bottomHeight,
      duration: 0,
    });
  }
}

// Highlight links
function highlightLinks(update) {
  $("body").removeClass("highlight_links");

  if (update) {
    accessibilityPropeties.highlightLinkActive =
      !accessibilityPropeties.highlightLinkActive;
    updatePropeties(true);
  }

  if (accessibilityPropeties.highlightLinkActive) {
    $("body").addClass("highlight_links");
  }
}

// Invert Colors
function invertColors(update) {
  $("html").removeClass("invert_colors");

  if (update) {
    accessibilityPropeties.invertColorsActive =
      !accessibilityPropeties.invertColorsActive;
    updatePropeties(true);
  }

  if (accessibilityPropeties.invertColorsActive) {
    $("html").addClass("invert_colors");
  }
}

// Update propeties and localstorage
function updatePropeties(update) {
  let localSettings = localStorage.getItem("accessibilityPropeties");

  if (!localSettings || update) {
    localStorage.setItem(
      "accessibilityPropeties",
      JSON.stringify(accessibilityPropeties)
    );
    markActivated();
    return;
  }

  accessibilityPropeties = JSON.parse(localSettings);
}

// Mark the activated features
function markActivated() {
  $("#zoom_text, #reading_mask, #highlight_link, #invert_colors").removeClass(
    "activated"
  );

  if (accessibilityPropeties.zoomLevel) {
    $("#zoom_text").addClass("activated");
  }

  if (accessibilityPropeties.readingMaskActive) {
    $("#reading_mask").addClass("activated");
  }

  if (accessibilityPropeties.highlightLinkActive) {
    $("#highlight_link").addClass("activated");
  }

  if (accessibilityPropeties.invertColorsActive) {
    $("#invert_colors").addClass("activated");
  }
}

$(document).ready(function () {
  // Call functions on load
  updatePropeties();
  zoomText();
  openReadingMask();
  markActivated();
  highlightLinks();
  invertColors();

  // Call functions on events
  $("#zoom_text").on("click", function () {
    zoomLevelIncrement();
    zoomText();
  });

  $("#reading_mask").on("click", function () {
    openReadingMask(true);
  });

  $(document).on("keydown", function (event) {
    if (event.key == "Escape" && accessibilityPropeties.readingMaskActive) {
      openReadingMask(true);
    }
  });

  $(window).on("mousemove", function (e) {
    readingMaskMove(e);
  });

  $("#highlight_link").on("click", function () {
    highlightLinks(true);
  });

  $("#invert_colors").on("click", function () {
    invertColors(true);
  });

  // Toggle Panel
  $(".toggle_accessibility_panel").on("click", function () {
    $(".accessibility_panel").toggleClass("open");
  });
});
