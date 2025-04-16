function preloaderStart() {
  gsap.registerPlugin(SplitText);

  // Use GSAP's SplitText (not SplitType)
  const splitText = new SplitText(".section-header-main-hedding", {
    type: "words",
  });
  const splitTextHeading = new SplitText(".section-header-main-title h1", { 
	  type: "words" 
  });
  const splitTextSub = new SplitText(".section-header-main-subtitle h2", {
    type: "words",
  });
  const splitTextPhara = new SplitText(".section-header-main-intro p", {
    type: "words",
  });
  const splitTextPhara1 = new SplitText(".section-header-main-secondcolumn p", {
    type: "words",
  });
  const splitTextPhara2 = new SplitText(".section-header-chariman-message p", {
    type: "words",
  });

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

  // Animate .section-header-main-title-bgbox
	gsap.to(".section-header-main-title-bgbox", {
	  top: "0%",
	  duration: 1,
	  ease: "power2.easeOut"
	});

	// Animate .section-header-main-title-bg
	gsap.fromTo(
	  ".section-header-main-title-bg",
	  { left: "100%", scale: 1.2, opacity: 0 },
	  { left: "0%", opacity: 1, duration: 2, ease: "power2.inOut" }
	);
	
	
	gsap.fromTo(
	  ".section-header-charimanimage",
	  {scale: 1.2},
	  {scale:1, duration: 4.2, ease: "power2.inOut" }
	);

	// Animate .section-header-charimanbgimage entry
	gsap.fromTo(
	  ".section-header-charimanbgimage",
	  { scale: 1.2, bottom: "-100%", opacity: 0 },
	  {
		bottom: "10%",
		opacity: 1,
		duration: 2,
		ease: "power2.inOut"
	  }
	);
	
	// Animate scale of .section-header-main-title-bg
	gsap.to(".section-header-main-title-bg", {
	  scale: 1,
	  duration: 4,
	  delay: 1.2,
	  ease: "power2.inOut"
	});	
	
	
	// Animate .section-header-charimanbgimage scale
	gsap.to(".section-header-charimanbgimage", {
	  scale: 1,
	  duration: 3,
	  ease: "power2.inOut",
	  delay: 1.2
	});
	
	// Animate .section-header-main-title-bg-services
	gsap.fromTo(
	  ".section-header-main-title-bg-services",
	  { scale: 1.2, left: "100%", opacity: 0 },
	  {
		left: "0%",
		opacity: 1,
		duration: 3,
		ease: "power2.inOut"
	  }
	);
	
	// Animate .section-header-charimanbgimage scale
	gsap.to(".section-header-main-title-bg-services", {
	  scale: 1,
	  duration: 3,
	  ease: "power2.inOut",
	  delay: 1.5
	});
	
//	if (window.matchMedia("(max-width: 1024px) and (min-height: 1024px)").matches) {
//		
//		// Animate .section-header-leftbar-img move
//		gsap.to(".section-header-leftbar-img", {
//		  top: "-20%",
//		  duration: 2,
//		  ease: "power2.inOut"
//		});	 
//		
//	} else {
//		
//		// Animate .section-header-leftbar-img move
//		gsap.to(".section-header-leftbar-img", {
//		  top: "-10%",
//		  duration: 2,
//		  ease: "power2.inOut"
//		});
//		
//	};
	
	if (window.matchMedia("(max-width: 1024px) and (min-height: 1024px)").matches) {
  
	  // Animate .section-header-leftbar-img move
	  gsap.to(".section-header-leftbar-img", {
		top: "-20%",
		duration: 2,
		ease: "power2.inOut"
	  });

	} else if (window.matchMedia("(max-width: 1024px)").matches) {

	  // Animate .section-header-leftbar-img move
	  gsap.to(".section-header-leftbar-img", {
		top: "-10%",
		duration: 2,
		ease: "power2.inOut"
	  });

	} else {

	  // Animate .section-header-leftbar-img move
	  gsap.to(".section-header-leftbar-img", {
		top: "0%",
		duration: 2,
		ease: "power2.inOut"
	  });

	}

	// Animate .section-header-leftbar-img scale
	gsap.to(".section-header-leftbar-img", {
	  scale: 1,
	  duration: 3,
	  ease: "power2.inOut",
	  delay: 1.2 // Adjust delay to control overlap manually
	});	
	
	// Animate .section-header-leftbar-img-services
	gsap.fromTo(
	  ".section-header-leftbar-img-services",
	  { scale: 1.15 },
	  { bottom: "10%", duration: 3, ease: "power2.inOut" }
	);
	
	// Animate .section-header-leftbar-img scale
	gsap.to(".section-header-leftbar-img-services", {
	  scale: 1,
	  duration: 3,
	  ease: "power2.inOut",
	  delay: 1.5 // Adjust delay to control overlap manually
	});	
	
	gsap.fromTo(
	  ".section-header-main-sectionimg",
	  {scale: 1.3},
	  {scale:1, duration: 4,delay: 1.2, ease: "power2.inOut" }
	);

	// Animate splitText.words
	gsap.from(splitText.words, {
	  opacity: 0,
	  y: 30,
	  duration: 2,
	  delay: 0.9,
	  ease: "power2.out",
	  stagger: 0.1
	});
	
	// Animate splitText.words
	gsap.from(splitTextHeading.words, {
	  opacity: 0,
	  y: 30,
	  duration: 2,
	  delay: 0.9,
	  ease: "power2.out",
	  stagger: 0.1
	});

	// Animate splitTextSub.words
	gsap.from(splitTextSub.words, {
	  opacity: 0,
	  y: 30,
	  duration: 2,
	  delay: 1.2,
	  ease: "power2.out",
	  stagger: 0.1
	});

	// Animate splitTextPhara2.words
	gsap.from(splitTextPhara2.words, {
	  opacity: 0,
	  y: 30,
	  duration: 1.5,
	  delay: 1.2,
	  ease: "power2.out",
	  stagger: 0.1
	});
	
	// Animate splitTextPhara.words
	gsap.from(splitTextPhara1.words, {
	  opacity: 0,
	  y: 30,
	  duration: 1.5,
	  delay: 1.2,
	  ease: "power2.out",
	  stagger: 0.1
	});

	// Animate splitTextPhara.words
	gsap.from(splitTextPhara.words, {
	  opacity: 0,
	  y: 30,
	  duration: 1.5,
	  delay: 1.2,
	  ease: "power2.out",
	  stagger: 0.1
	});

  tl.to(".loader-wrap", {
    y: -1500,
  });
  tl.to(".loader-wrap", {
    zIndex: -1,
    display: "none",
  });
}

// SVG animation start
$(window).on("load", function () {
  preloaderStart();
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
  $('table:not(.table-responsive table)').wrap('<div class="table-responsive" ></div>');

  $(window).on("scroll", function () {
    let scrolledHeight = $(window).scrollTop();

    if (scrolledHeight > 50) {
		if (window.matchMedia("(min-width: 992px)").matches) {
			$(".top-next-previousbox").addClass("active");
		}      	
        $(".page_up").addClass("active");
    } else {
		$(".top-next-previousbox").removeClass("active");
		$(".page_up").removeClass("active");
    }
  });
  $(".page_up").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
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
    });

    navtl
      .to(".fixed_grid_nav_container", {
        autoAlpha: 1,
        duration: 0,
      })
      .to(".fixed_grid_nav_container", {
        width: "100%",
        duration: 0.5,
        ease: "power2.out",
      })
      .from(".grid_nav_inside_logo", {
        autoAlpha: 0,
        y: -20,
        duration: 0.5,
        ease: "power2.out",
      })
      .from(
        ".grid_nav_close",
        {
          autoAlpha: 0,
          y: -20,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.5"
      )
      .from(".nav_common", {
        autoAlpha: 0,
        marginTop: 20,
        duration: 0.5,
        stagger: 0.05,
        ease: "power1.in",
      });

    $("#navButton").click(function () {
      navtl.play();
    });
    $(".grid_nav_close").click(function () {
      navtl.reverse();
    });
  }
  if ($(window).width() < 1200 && $(window).width() > 991) {
    let navtl = gsap.timeline({
      paused: true,
    });

    navtl
      .to(".fixed_grid_nav_container", {
        autoAlpha: 1,
        duration: 0,
      })
      .to(".fixed_grid_nav_container", {
        width: "40%",
        duration: 0.5,
        ease: "power2.out",
      })
      .from(".grid_nav_inside_logo", {
        autoAlpha: 0,
        y: -20,
        duration: 0.5,
        ease: "power2.out",
      })
      .from(
        ".grid_nav_close",
        {
          autoAlpha: 0,
          y: -20,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.5"
      )
      .from(".nav_common", {
        autoAlpha: 0,
        marginTop: 20,
        filter: "blur(10px)",
        duration: 0.25,
        stagger: 0.01,
        ease: "power1.in",
      });

    $("#navButton").click(function () {
      navtl.play();
    });
    $(".grid_nav_close").click(function () {
      navtl.reverse();
    });
  }
  if ($(window).width() < 992 && $(window).width() > 767) {
    let navtl = gsap.timeline({
      paused: true,
    });

    navtl
      .to(".fixed_grid_nav_container", {
        autoAlpha: 1,
        duration: 0,
      })
      .to(".fixed_grid_nav_container", {
        width: "50%",
        duration: 0.5,
        ease: "power2.out",
      })
      .from(".grid_nav_inside_logo", {
        autoAlpha: 0,
        y: -20,
        duration: 0.5,
        ease: "power2.out",
      })
      .from(
        ".grid_nav_close",
        {
          autoAlpha: 0,
          y: -20,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.5"
      )
      .from(".nav_common", {
        autoAlpha: 0,
        marginTop: 20,
        filter: "blur(10px)",
        duration: 0.25,
        stagger: 0.01,
        ease: "power1.in",
      });

    $("#navButton").click(function () {
      navtl.play();
    });
    $(".grid_nav_close").click(function () {
      navtl.reverse();
    });
  }
  if ($(window).width() < 767) {
    let navtl = gsap.timeline({
      paused: true,
    });

    navtl
      .to(".fixed_grid_nav_container", {
        autoAlpha: 1,
        duration: 0,
      })
      .to(".fixed_grid_nav_container", {
        width: "100%",
        duration: 0.5,
        ease: "power2.out",
      })
      .from(".grid_nav_inside_logo", {
        autoAlpha: 0,
        y: -20,
        duration: 0.5,
        ease: "power2.out",
      })
      .from(
        ".grid_nav_close",
        {
          autoAlpha: 0,
          y: -20,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.5"
      )
      .from(".nav_common", {
        autoAlpha: 0,
        marginTop: 20,
        filter: "blur(10px)",
        duration: 0.25,
        stagger: 0.01,
        ease: "power1.in",
      });

    $("#navButton").click(function () {
      navtl.play();
    });
    $(".grid_nav_close").click(function () {
      navtl.reverse();
    });
  }

  if ($(window).width() < 1200) {
    $(".nav_row").contents().unwrap();

    $(".nav_item").click(function () {
      let target = $(this).find(".nav_dropdown_container");
      let other = $(".nav_dropdown_container").not(target);
      let otherNav = $(".nav_item").not(this);
      let navItemFive = $(".nav_item_five");

      navItemFive.removeClass("active");
      otherNav.removeClass("active");
      other.slideUp();
      $(this).toggleClass("active");
      target.slideToggle();
    });

    $(".nav_item_five").click(function () {
      let target = $(this).find(".nav_dropdown_container");
      let other = $(".nav_dropdown_container").not(target);
      let otherNav = $(".nav_item").not(this);

      otherNav.removeClass("active");
      other.slideUp();
      $(this).toggleClass("active");
      target.slideToggle();
    });
  }

  let bodtl = gsap.timeline({
    scrollTrigger: {
      trigger: ".bod_one",
      start: "top 65%",
      scrub: false,
      //   markers: true,
      toggleActions: "play none none reverse",
    },
  });

  bodtl.from(".bod_main", {
    x: -20,
    autoAlpha: 0,
    duration: 0.5,
    stagger: 0.05,
  });

  let exetl = gsap.timeline({
    scrollTrigger: {
      trigger: ".exe_main_one",
      start: "top 65%",
      scrub: false,
      //   markers: true,
      toggleActions: "play none none reverse",
    },
  });

  exetl.from(".exe_main", {
    x: -20,
    autoAlpha: 0,
    duration: 0.5,
    stagger: 0.05,
  });

  $(".NavSearchIcon").click(function () {
    $(".searchWrapper").addClass("active");
  });
  $("#closeIconSearch").click(function () {
    $(".searchWrapper").removeClass("active");
  });
});

$(document).ready(function () {
  // Function to count decimal places
  Number.prototype.countDecimals = function () {
    if (Math.floor(this.valueOf()) === this.valueOf()) return 0;
    return this.toString().split(".")[1]?.length || 0;
  };

  let counters = document.querySelectorAll(".counter");

  for (let counter of counters) {
    let rawValue = counter.innerHTML.replace(/,/g, ""); // Remove commas
    let value = Number(rawValue);
    let decimalPlaces = value.countDecimals();

    gsap.fromTo(
      counter,
      { textContent: 0 },
      {
        textContent: value,
        duration: 2.5,
        ease: "power2.inOut",
        snap: { textContent: decimalPlaces > 0 ? 10 ** -decimalPlaces : 1 },
        onUpdate: function () {
          counter.innerHTML = Number(
            this.targets()[0].textContent
          ).toLocaleString(undefined, {
            minimumFractionDigits: decimalPlaces,
            maximumFractionDigits: decimalPlaces,
          });
        },
        scrollTrigger: {
          trigger: counter,
          start: "top 80%",
          once: true, // Ensures it only animates once
        },
      }
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 2, // Adjust smoothness
    effects: true, // Enable effects for ScrollTrigger animations
  });
});

if ($(window).width() > 992) {
  // Select the elements
  let historyTimeline = document.querySelector(".history-timeline");
  let historyTimelineContainer = document.querySelector(
    ".history-timeline-container"
  );

  // Calculate the total distance to scroll

  if (historyTimeline) {
    let historyTimelineDistance =
      historyTimeline.scrollWidth - historyTimelineContainer.offsetWidth;

    gsap.to(".history-timeline", {
      x: -historyTimelineDistance,
      scrollTrigger: {
        trigger: ".history-timeline-container",
        pin: true,
        start: "center center",
        end: "+=2000",
        scrub: 1,
        markers: false,
      },
    });
  }
} else {
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

const swiper = new Swiper(".catgories-swiper", {
  loop: true,
  slidesPerView: 1,
  effect: "coverflow",
  centeredSlides: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 200,
    modifier: 2,
    slideShadows: true,
  },
  breakpoints: {
    540: {
      slidesPerView: 2,
    },
    1199: {
      slidesPerView: 3,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

$(document).ready(function () {
  const seccondSecText = new SplitText(".seccond-section p", { type: "words" });

  gsap.to(seccondSecText.words, {
    opacity: 1,
    stagger: 0.05,
    scrollTrigger: {
      trigger: ".seccond-section p",
      start: "top 90%",
      end: "bottom center",
      scrub: 1,
    },
  });

  const drivingProsText = new SplitText(".dirving-pros-section h2", {
    type: "words",
  });

  gsap.to(drivingProsText.words, {
    opacity: 1,
    stagger: 0.05,
    scrollTrigger: {
      trigger: ".dirving-pros-section h2",
      start: "top 90%",
      end: "bottom center",
      scrub: 1,
    },
  });

  gsap.utils.toArray(".slide-left-text").forEach((element) => {
    gsap.from(element, {
      x: 50,
      opacity: 0,
      duration: 0.75,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
    });
  });
});
