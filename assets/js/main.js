$(function () {

    "use strict";	
	
    /* =============================================================================
    -------------------------------  Preloader svg   -------------------------------
    ============================================================================= */

    const svg = document.getElementById("svg");
    const tl = gsap.timeline();
    const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
    const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

    tl.to(".loader-wrap-heading .load-text , .loader-wrap-heading .cont", {
        delay: 1.5,
        y: -100,
        opacity: 0,
    });
    tl.to(svg, {
        duration: 0.5,
        attr: { d: curve },
        ease: "power2.easeIn",
    }).to(svg, {
        duration: 0.5,
        attr: { d: flat },
        ease: "power2.easeOut",
    });
//    tl.from(
//        ".header-section .section-img-container img",
//        {
//            scale: 1.7,
//            duration: 2.5,
//            ease: "power2.easeOut",
//        },
//        "<"
//    );
//    tl.from(
//        ".header-section .section-info h2",
//        {
//            y: 30,
//            opacity: 0,
//            duration: 0.5,
//            ease: "back.out(1.7)",
//        },
//        "<"
//    );
//    tl.from(
//        ".header-section .section-info p",
//        {
//            y: 50,
//            opacity: 0,
//            duration: 1,
//            ease: "back.out(1.5)",
//        },
//        "-=1.5"
//    );
//    tl.from(
//        ".header-section .page-titles .page-actions",
//        {
//            y: -20,
//            opacity: 0,
//            duration: 0.5,
//            ease: "back.out(1.2)",
//        },
//        "<"
//    );
//    tl.from(
//        ".header-section .page-titles h1",
//        {
//            y: 50,
//            opacity: 0,
//            duration: 1,
//            ease: "back.out(1.7)",
//        },
//        "-=90%"
//    );
//    tl.to(".loader-wrap", {
//        y: -1500,
//    });
    tl.to(".loader-wrap", {
        zIndex: -1,
        display: "none",
    });
});

$(".sub-menu-title").on("click", function (e) {
  e.preventDefault();
  $(this).parent().find(".sub-menu-content").slideToggle();
  $(this).toggleClass("active");
  $(this).parent().find(".fa-arrow-down-long").toggleClass("close");
});

$(document).ready(function () {
  $("#navButton").click(function () {
    $(".fixedNavContainer").addClass("active");
  });
  $("#closeIcon").click(function () {
    $(".fixedNavContainer").removeClass("active");
  });
  $(".navItem").hover(function () {
    let target = $(this)
      .find(".navTextMobileWrapper")
      .find(".navTextContainer");
    target.toggleClass("active");
  });
  $(".navImageMobile").click(function () {
    var target = $(this).siblings(".navTextMobileWrapper");
    var other = $(".navTextMobileWrapper").not(target);
    other.slideUp();
    target.slideToggle();
  });
  $(".NavSearchIcon").click(function () {
    $(".searchWrapper").addClass("active");
  });
  $("#closeIconSearch").click(function () {
    $(".searchWrapper").removeClass("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 2, // Adjust smoothness
        effects: true // Enable effects for ScrollTrigger animations
    });
});