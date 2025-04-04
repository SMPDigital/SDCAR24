function preloaderStart(){
	gsap.registerPlugin(SplitText);

	// Use GSAP's SplitText (not SplitType)
	const splitText = new SplitText(".section-header-main-hedding", { type: "words" });
	const splitTextSub = new SplitText(".section-header-main-subtitle h2", { type: "words" });
	const splitTextPhara = new SplitText(".section-header-main-intro p", { type: "words" });
	const splitTextPhara2 = new SplitText(".section-header-chariman-message p", { type: "words" });


	const tl = gsap.timeline();

	// tl.to(".preloader img", {
	// 	opacity: 0,
	// 	scale: 0.5,
	// 	duration: 0.5,
	// 	ease: "power2.out",
	//   });
	  tl.to(
	".preloader .loader",
	{
		scale: 0,
		opacity: 0,
		duration: 0.75,
		ease: "power2.inOut",
	},
	"<+=15%"
	);
	tl.to(
	".preloader",
	{
		height: 0,
		duration: 1,
		ease: "power3.inOut",
		onComplete: () => {
		$(".preloader").hide();
		},
	},
	"<+=50%"
	);

	tl.to(".section-header-main-title-bgbox", {
		top: "0%",
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
		{ scale: 1.2, bottom: "-100%", opacity: 0 }, // Starting scale (from)
		{ scale: 1, bottom:"0%", opacity:1, duration: 2.5, ease: "power2.inOut" },
		"<" // Start at the same time as ".section-header-leftbar-img"
	);
	
	tl.fromTo(
		".section-header-charimanbgimage",
		{ scale: 1.2, bottom: "-100%", opacity: 0  }, // Starting scale (from)
		{ scale: 1, bottom:"-10%", opacity:1, duration: 2.5, ease: "power2.inOut" },
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
};



// SVG animation start
$(window).on("load", function () {
preloaderStart()
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
  if ($(window).width() > 1200) {
	let navtl = gsap.timeline({
		paused: true,
	  })
	
	  navtl.to(".fixed_grid_nav_container", {
		autoAlpha: 1,
		duration: 0,
	  })
	  .to(".fixed_grid_nav_container", {
		width: "100%",
		duration: 0.5,
		ease: "power2.out"
	  })
	  .from(".grid_nav_inside_logo", {
		autoAlpha: 0,
		y: -20,
		duration: 0.5,
		ease: "power2.out"
	  })
	  .from(".grid_nav_close", {
		autoAlpha: 0,
		y: -20,
		duration: 0.5,
		ease: "power2.out"
	  }, "-=0.5")
	  .from(".nav_common", {
		autoAlpha: 0,
		marginTop: 20,
		duration: 0.5,
		stagger: 0.05,
		ease: "power1.in"
	  })
	
	
	  $("#navButton").click(function() {
		navtl.play();
	  })
	  $(".grid_nav_close").click(function() {
		navtl.reverse();
	  })
  }
  if ($(window).width() < 1200 && $(window).width() > 991) {
	let navtl = gsap.timeline({
		paused: true,
	  })
	
	  navtl.to(".fixed_grid_nav_container", {
		autoAlpha: 1,
		duration: 0,
	  })
	  .to(".fixed_grid_nav_container", {
		width: "40%",
		duration: 0.5,
		ease: "power2.out"
	  })
	  .from(".grid_nav_inside_logo", {
		autoAlpha: 0,
		y: -20,
		duration: 0.5,
		ease: "power2.out"
	  })
	  .from(".grid_nav_close", {
		autoAlpha: 0,
		y: -20,
		duration: 0.5,
		ease: "power2.out"
	  }, "-=0.5")
	  .from(".nav_common", {
		autoAlpha: 0,
		marginTop: 20,
		filter: "blur(10px)",
		duration: 0.25,
		stagger: 0.01,
		ease: "power1.in"
	  })
	
	
	  $("#navButton").click(function() {
		navtl.play();
	  })
	  $(".grid_nav_close").click(function() {
		navtl.reverse();
	  })
  }
  if ($(window).width() < 992 && $(window).width() > 767) {
	let navtl = gsap.timeline({
		paused: true,
	  })
	
	  navtl.to(".fixed_grid_nav_container", {
		autoAlpha: 1,
		duration: 0,
	  })
	  .to(".fixed_grid_nav_container", {
		width: "50%",
		duration: 0.5,
		ease: "power2.out"
	  })
	  .from(".grid_nav_inside_logo", {
		autoAlpha: 0,
		y: -20,
		duration: 0.5,
		ease: "power2.out"
	  })
	  .from(".grid_nav_close", {
		autoAlpha: 0,
		y: -20,
		duration: 0.5,
		ease: "power2.out"
	  }, "-=0.5")
	  .from(".nav_common", {
		autoAlpha: 0,
		marginTop: 20,
		filter: "blur(10px)",
		duration: 0.25,
		stagger: 0.01,
		ease: "power1.in"
	  })
	
	
	  $("#navButton").click(function() {
		navtl.play();
	  })
	  $(".grid_nav_close").click(function() {
		navtl.reverse();
	  })
  }
  if ($(window).width() < 767) {
	let navtl = gsap.timeline({
		paused: true,
	  })
	
	  navtl.to(".fixed_grid_nav_container", {
		autoAlpha: 1,
		duration: 0,
	  })
	  .to(".fixed_grid_nav_container", {
		width: "100%",
		duration: 0.5,
		ease: "power2.out"
	  })
	  .from(".grid_nav_inside_logo", {
		autoAlpha: 0,
		y: -20,
		duration: 0.5,
		ease: "power2.out"
	  })
	  .from(".grid_nav_close", {
		autoAlpha: 0,
		y: -20,
		duration: 0.5,
		ease: "power2.out"
	  }, "-=0.5")
	  .from(".nav_common", {
		autoAlpha: 0,
		marginTop: 20,
		filter: "blur(10px)",
		duration: 0.25,
		stagger: 0.01,
		ease: "power1.in"
	  })
	
	
	  $("#navButton").click(function() {
		navtl.play();
	  })
	  $(".grid_nav_close").click(function() {
		navtl.reverse();
	  })
  }


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


if($(window).width() > 992){
	// Select the elements
	let historyTimeline = document.querySelector('.history-timeline');
	let historyTimelineContainer = document.querySelector('.history-timeline-container');

	// Calculate the total distance to scroll
	let historyTimelineDistance = historyTimeline.scrollWidth - historyTimelineContainer.offsetWidth;

	gsap.to('.history-timeline', {
		x: -historyTimelineDistance,
		scrollTrigger: {
			trigger: '.history-timeline-container',
			pin: true,
			start: 'center center',
			end: '+=2000',
			scrub: 1,
			markers: false
		}
	})
}
else {
	// let historyBlock = gsap.utils.toArray('.history-timeline .history-block');

	// historyBlock.forEach(element => {

	// 	gsap.from(element, {
	// 		x: 50,
	// 		opacity: 0,
	// 		duration: 1,
	// 		scrollTrigger: {
	// 			trigger: element,
	// 			start: 'top 80%',  // Adjusted start position
	// 			toggleActions: "play none none none", // Ensures it plays only once
	// 			markers: true
	// 		}
	// 	})

	// });
	

}


// ScrollTrigger.create()





