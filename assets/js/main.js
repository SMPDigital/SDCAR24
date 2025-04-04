$(function () {

    "use strict";	
	
    /* =============================================================================
    -------------------------------  Preloader svg   -------------------------------
    ============================================================================= */
	gsap.registerPlugin(SplitText);

	// Use GSAP's SplitText (not SplitType)
	const splitText = new SplitText(".section-header-main-hedding", { type: "words" });
	const splitTextSub = new SplitText(".section-header-main-subtitle h2", { type: "words" });
	const splitTextPhara = new SplitText(".section-header-main-intro p", { type: "words" });
	const splitTextPhara2 = new SplitText(".section-header-chariman-message p", { type: "words" });

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

	tl.to(".section-header-main-title-bgbox", {
		right: "0%",
		duration: 1,
		ease: "power2.easeOut",
	}, "<");

	tl.to(".section-header-leftbar-img", {
		bottom: "-5%",
		duration: 1.5, // Increased duration for a smoother effect
		ease: "power2.inOut",
	}, "<");

	tl.fromTo(
		".section-header-leftbar-img",
		{ scale: 1.15 }, // Starting scale (from)
		{ scale: 1, duration: 2.5, ease: "power2.inOut" },
		"-=0.8" // Start at the same time as the previous animation
	);
	
	tl.fromTo(
		".section-header-main-title-bg",
		{ scale: 1.2, opacity: 0 }, // Starting scale (from)
		{ scale: 1, opacity:1, duration: 2.5, ease: "power2.inOut" },
		"<" // Start at the same time as ".section-header-leftbar-img"
	);
	
	tl.fromTo(
		".section-header-charimanbgimage",
		{ scale: 1.2, opacity: 0  }, // Starting scale (from)
		{ scale: 1, opacity:1, duration: 2.5, ease: "power2.inOut" },
		"<" // Start at the same time as ".section-header-leftbar-img"
	);

	tl.fromTo(
		".section-header-main-sectionimg",
		{ scale: 1.2 }, // Starting scale (from)
		{ scale: 1, duration: 2.5, ease: "power2.inOut" },
		"<" // Start at the same time as ".section-header-leftbar-img"
	);

	tl.from(splitText.words, {  
		opacity: 0,
		y: 30, 
		duration: 1.5,
		delay: 0.4,
		ease: "power2.out",
		stagger: 0.1,
	}, "<");
	
	tl.from(splitTextSub.words, {  
		opacity: 0,
		y: 30, 
		duration: 1.5,
		delay: 0.4,
		ease: "power2.out",
		stagger: 0.1, 
	}, "<"); 
	
	tl.from(splitTextPhara2.words, {  
		opacity: 0,
		y: 30, 
		duration: 1.5,
		ease: "power2.out",
		stagger: 0.1, 
	}, "<");
	
	tl.from(splitTextPhara.words, {  
		opacity: 0,
		y: 30, 
		duration: 1.5,
		delay: 0.4,
		ease: "power2.out",
		stagger: 0.1, 
	}, "<");
	
    tl.to(".loader-wrap", {
        y: -1500,
    });
    tl.to(".loader-wrap", {
        zIndex: -1,
        display: "none",
    });
});

$(document).ready(function () {
  $(window).on("scroll", function () {
    let scrolledHeight = $(window).scrollTop();

    if (scrolledHeight > 50) {
      $(".top-next-previousbox").addClass("active");
//      $(".page_up").addClass("active");
    } else {
      $(".top-next-previousbox").removeClass("active");
//      $(".page_up").removeClass("active");
    }
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

  if ($(window).width() < 1200) {
    $('.nav_row').contents().unwrap();

	$(".nav_item").click(function() {
		let target = $(this).find(".nav_dropdown_container");
		let other = $(".nav_dropdown_container").not(target);
		let otherNav = $(".nav_item").not(this);
		let navItemFive = $(".nav_item_five")
	
	
		navItemFive.removeClass("active")
		otherNav.removeClass("active")
		other.slideUp();
		$(this).toggleClass("active")
		target.slideToggle();
	  })
	  
	  $(".nav_item_five").click(function() {
		let target = $(this).find(".nav_dropdown_container");
		let other = $(".nav_dropdown_container").not(target);
		let otherNav = $(".nav_item").not(this);
	
		otherNav.removeClass("active")
		other.slideUp();
		$(this).toggleClass("active")
		target.slideToggle();
	  })
  }


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



// SVG animation start
$(window).on("load", function () {
  let svgAnimObjects = $(".svg-animate");

  for (let object of svgAnimObjects) {
    let objectElement = $(object).contents();
    let svgElement = $(objectElement).find("svg");

    ScrollTrigger.create({
      trigger: object,
      start: "top 99%",
      onEnter: playSvgAnimation,
    });

    function playSvgAnimation() {
      svgElement.addClass("play-svg-anim");
    }
  }
});


