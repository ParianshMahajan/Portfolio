/*-----------------------------------------------------------------------------------

Theme Name: Gerold - Personal Portfolio HTML5 Template
Theme URI: https://themejunction.net/html/gerold/demo/
Author: Theme-Junction
Author URI: https://themeforest.net/user/theme-junction
Description: Gerold - Personal Portfolio HTML5 Template

-----------------------------------------------------------------------------------

/***************************************************
==================== JS INDEX ======================
****************************************************
// Data js
// Sidebar Navigation
// Sticky Header
// Hamburger Menu
// Scroll To Section
// OnePage Active Class
// Portfolio Filter
// Portfolio Gallery Carousel
// Testimonial Carousel
// Nice Select
// ALL Popup
// Preloader
// Sidebar Hover BG Color
// Services Hover BG
// Portfolio Filter BG Color
// Funfact
// WoW Js

****************************************************/

(function ($) {
  "use strict";

  /*------------------------------------------------------
  /  Data js
  /------------------------------------------------------*/
  $("[data-bg-image]").each(function () {
    $(this).css(
      "background-image",
      "url(" + $(this).attr("data-bg-image") + ")"
    );
  });

  $("[data-bg-color]").each(function () {
    $(this).css("background-color", $(this).attr("data-bg-color"));
  });

  $(document).ready(function ($) {
    /*------------------------------------------------------
  	/  Sticky Header
  	/------------------------------------------------------*/
    var lastScrollTop = 0;
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();

      if (scroll > 300) {
        $(".tj-header-area.header-sticky").addClass("sticky");
        $(".tj-header-area.header-sticky").removeClass("sticky-out");
      } else if (scroll < lastScrollTop) {
        if (scroll < 500) {
          $(".tj-header-area.header-sticky").addClass("sticky-out");
          $(".tj-header-area.header-sticky").removeClass("sticky");
        }
      } else {
        $(".tj-header-area.header-sticky").removeClass("sticky");
      }

      lastScrollTop = scroll;
    });

    /*------------------------------------------------------
  	/  Hamburger Menu
  	/------------------------------------------------------*/
    $(".menu-bar").on("click", function () {
      $(".menu-bar").toggleClass("menu-bar-toggeled");
      $(".header-menu").toggleClass("opened");
      $("body").toggleClass("overflow-hidden");
    });

    $(".header-menu ul li a").on("click", function () {
      $(".menu-bar").removeClass("menu-bar-toggeled");
      $(".header-menu").removeClass("opened");
      $("body").removeClass("overflow-hidden");
    });

    /*------------------------------------------------------
  	/  OnePage Active Class
  	/------------------------------------------------------*/
    $(".header-menu nav ul").onePageNav({
      currentClass: "current-menu-ancestor",
      changeHash: false,
      easing: "swing",
    });

    /*------------------------------------------------------
  	/  Portfolio Filter
  	/------------------------------------------------------*/
    $(".portfolio-box").imagesLoaded(function () {
      var $grid = $(".portfolio-box").isotope({
        // options
        masonry: {
          columnWidth: ".portfolio-box .portfolio-sizer",
          gutter: ".portfolio-box .gutter-sizer",
        },
        itemSelector: ".portfolio-box .portfolio-item",
        percentPosition: true,
      });

      // filter items on button click
      $(".filter-button-group").on("click", "button", function () {
        $(".filter-button-group button").removeClass("active");
        $(this).addClass("active");

        var filterValue = $(this).attr("data-filter");
        $grid.isotope({ filter: filterValue });
      });
    });

    /*------------------------------------------------------
  	/  Portfolio Gallery Carousel
  	/------------------------------------------------------*/
    $(".portfolio_gallery.owl-carousel").owlCarousel({
      items: 2,
      loop: true,
      lazyLoad: true,
      center: true,
      // autoWidth: true,
      autoplayHoverPause: true,
      autoplay: false,
      autoplayTimeout: 5000,
      smartSpeed: 800,
      margin: 30,
      nav: false,
      dots: true,
      responsive: {
        // breakpoint from 0 up
        0: {
          items: 1,
          margin: 0,
        },
        // breakpoint from 768 up
        768: {
          items: 2,
          margin: 20,
        },
        992: {
          items: 2,
          margin: 30,
        },
      },
    });

    /*------------------------------------------------------
  	/ Testimonial Carousel
  	/------------------------------------------------------*/
    $(".testimonial-carousel.owl-carousel").owlCarousel({
      loop: true,
      margin: 30,
      nav: false,
      dots: true,
      autoplay: false,
      active: true,
      smartSpeed: 1000,
      autoplayTimeout: 7000,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 2,
        },
      },
    });

    /*------------------------------------------------------
  	/ Post Gallery Carousel
  	/------------------------------------------------------*/
    $(".tj-post__gallery.owl-carousel").owlCarousel({
      items: 1,
      loop: true,
      margin: 30,
      dots: false,
      nav: true,
      navText: [
        '<i class="fal fa-arrow-left"></i>',
        '<i class="fal fa-arrow-right"></i>',
      ],
      autoplay: false,
      smartSpeed: 1000,
      autoplayTimeout: 3000,
    });
    /*------------------------------------------------------
  	/ Brand Slider
  	/------------------------------------------------------*/
    if ($(".brand-slider").length > 0) {
      var brand = new Swiper(".brand-slider", {
        slidesPerView: 6,
        spaceBetween: 30,
        loop: false,
        breakpoints: {
          320: {
            slidesPerView: 2,
          },
          576: {
            slidesPerView: 3,
          },
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          992: {
            slidesPerView: 5,
          },
          1024: {
            slidesPerView: 6,
          },
        },
      });
    }

    /*------------------------------------------------------
  	/  Nice Select
  	/------------------------------------------------------*/
    $("select").niceSelect();

    /*------------------------------------------------------
  	/  ALL Popup
  	/------------------------------------------------------*/
    if ($(".popup_video").length > 0) {
      $(`.popup_video`).lightcase({
        transition: "elastic",
        showSequenceInfo: false,
        slideshow: false,
        swipe: true,
        showTitle: false,
        showCaption: false,
        controls: true,
      });
    }

    $(".modal-popup").magnificPopup({
      type: "inline",
      fixedContentPos: false,
      fixedBgPos: true,
      overflowY: "auto",
      closeBtnInside: true,
      preloader: false,
      midClick: true,
      removalDelay: 300,
      mainClass: "popup-mfp",
    });
  });

  $(window).on("load", function () {
    /*------------------------------------------------------
  	/  WoW Js
  	/------------------------------------------------------*/
    var wow = new WOW({
      boxClass: "wow", // default
      animateClass: "animated", // default
      offset: 100, // default
      mobile: true, // default
      live: true, // default
    });
    wow.init();

    /*------------------------------------------------------
  	/  Preloader
  	/------------------------------------------------------*/
    const svg = document.getElementById("preloaderSvg");
    const svgText = document.querySelector(".hero-section .intro_text svg text");
    const app = document.getElementById("hero-sub-title");
    
    var typewriter = new Typewriter(app, {
      loop: false,
      delay: 75,
      cursor: '|',        // Optional: Change cursor symbol
      autoStart: true,    // Starts automatically without calling .start()
      deleteSpeed: 750,    // Controls the speed of deleting characters
    });
    
    // const tl = gsap.timeline();
    
    // // Define curve and flat animations for the SVG path
    // const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
    // const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";
    
    // // Timeline animations
    // tl.to(".preloader-heading .load-text , .preloader-heading .cont", {
    //   delay: 1.5,
    //   y: -100,
    //   opacity: 0,
    // })
    //   .to(svg, {
    //     duration: 0.5,
    //     attr: { d: curve },
    //     ease: "power2.easeIn",
    //   })
    //   .to(svg, {
    //     duration: 0.5,
    //     attr: { d: flat },
    //     ease: "power2.easeOut",
    //   })
    //   .to(".preloader", {
    //     y: -1500,
    //     onComplete: startStrokeAnimation, // Trigger animation right after preloader is off
    //   })
    //   .to(".preloader", {
    //     zIndex: -1,
    //     display: "none",
    //   });
    
    // Start the stroke animation and typewriter after the preloader disappears
    function startStrokeAnimation() {
      // Start the typewriter effect
      typewriter
        .typeString("I am Pariansh")
        .callFunction(() => {
          // This function is called when typing completes
      
          const cursor = document.querySelector('.Typewriter__cursor');
          if (cursor) {
            setTimeout(() => {
              cursor.classList.add('disableCursor'); // Add the class to hide the cursor
            }, 2100); // 2 seconds delay
          } else {
            console.error("Cursor not found.");
          }
        })
        .start();
    
      // Add the class to start the stroke animation
      svgText.classList.add("animate-stroke");
    }


 const tl = gsap.timeline();

    // Step 1: Show the loading text and line
    tl.to([".loading-screen h3", ".loading-screen .line-frame"], {
        ease: "power4.inOut",
        duration: 0.8,
        opacity: 1,
        y: "0%",
    });

    // Step 2: Delay of 1.5 seconds
    tl.to({}, { duration: 1.6 });  

    // Step 3: Loading text sinks into the line and disappears
    tl.to(".loading-screen h3", {
        ease: "power4.inOut",
        duration: 1.9,
        y: "100%",  
        opacity: 0,  
    }, "<");  

    // Step 4: The whole loading screen lifts up revealing the page
    
    tl.to(".loading-screen", {
        ease: "expo.out",
        duration: 0.3,
        onComplete: startStrokeAnimation,
        y: -1500, 
    });
    // Step 5: Hide the loading screen (z-index update)
    tl.set(".loading-screen", { zIndex: -100 });

    // Step 6: Fade-in and lift up the main page
    tl.from("#main", {
        ease: "power3.inOut",
        duration: 0.5,
        opacity: 0, 
        y: "0%",
    }, "-=0.6"); 

    /*------------------------------------------------------
  	/  Services Hover BG
  	/------------------------------------------------------*/
    function service_animation() {
      var active_bg = $(".services-widget .active-bg");
      var element = $(".services-widget .current");
      $(".services-widget .service-item").on("mouseenter", function () {
        var e = $(this);
        activeService(active_bg, e);
      });
      $(".services-widget").on("mouseleave", function () {
        element = $(".services-widget .current");
        activeService(active_bg, element);
        element.closest(".service-item").siblings().removeClass("mleave");
      });
      activeService(active_bg, element);
    }
    service_animation();

    function activeService(active_bg, e) {
      if (!e.length) {
        return false;
      }
      var topOff = e.offset().top;
      var height = e.outerHeight();
      var menuTop = $(".services-widget").offset().top;
      e.closest(".service-item").removeClass("mleave");
      e.closest(".service-item").siblings().addClass("mleave");
      active_bg.css({ top: topOff - menuTop + "px", height: height + "px" });
    }

    $(".services-widget .service-item").on("click", function () {
      $(".services-widget .service-item").removeClass("current");
      $(this).addClass("current");
    });

    /*------------------------------------------------------
  	/  Portfolio Filter BG Color
  	/------------------------------------------------------*/
    function filter_animation() {
      var active_bg = $(".portfolio-filter .button-group .active-bg");
      var element = $(".portfolio-filter .button-group .active");
      $(".portfolio-filter .button-group button").on("click", function () {
        var e = $(this);
        activeFilterBtn(active_bg, e);
      });
      activeFilterBtn(active_bg, element);
    }
    filter_animation();

    function activeFilterBtn(active_bg, e) {
      if (!e.length) {
        return false;
      }
      var leftOff = e.offset().left;
      var width = e.outerWidth();
      var menuLeft = $(".portfolio-filter .button-group").offset().left;
      e.siblings().removeClass("active");
      e.closest("button")
        .siblings()
        .addClass(".portfolio-filter .button-group");
      active_bg.css({ left: leftOff - menuLeft + "px", width: width + "px" });
    }

    /*------------------------------------------------------
  	/  Funfact
  	/------------------------------------------------------*/

    //   if ($(".odometer").length > 0) {
    // 	$(".odometer").appear(function () {
    // 		var odo = $(".odometer");
    // 		odo.each(function () {
    // 			var countNumber = $(this).attr("data-count");
    // 			$(this).html(countNumber);
    // 		});
    // 	});
    // }

   



    // Fetch stats from the server
    async function fetchStats() {
      try {
        const response = await fetch("/stats");
        const data = await response.json();

        if (data.status) {
          // Update the odometer data-count attributes
          const totalCommitsElement = document.getElementById("totalCommits");
          const totalLeetcodeQuestionsElement = document.getElementById(
            "totalLeetcodeQuestions"
          );

          if (totalCommitsElement && totalLeetcodeQuestionsElement) {
            totalCommitsElement.setAttribute("data-count", data.commits);
            totalLeetcodeQuestionsElement.setAttribute(
              "data-count",
              data.solvedQuestions
            );
          }
          // Trigger the odometer update
          if ($(".odometer").length > 0) {
            $(".odometer").appear(function () {
              var odo = $(".odometer");
              odo.each(function () {
                var countNumber = $(this).attr("data-count");
                $(this).html(countNumber);
              });
            });
          }
        }
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    }

    // Call fetchStats on page load
    $(document).ready(function () {
      fetchStats();
    });
  });

  const form = document.getElementById("contact-form");
  const submitBtn = document.getElementById("submit-btn");
  const errorMessageDiv = document.getElementById("error-message");

  const originalButtonHTML = submitBtn.innerHTML;

  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Clear any previous error messages
    errorMessageDiv.textContent = "";

    // Add loader inside the button and apply loading state
    submitBtn.classList.add("loading");
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span class="loader"></span> Sending...`;

    const formData = {
      Name: document.getElementById("Name").value,
      Email: document.getElementById("Email").value,
      PhoneNumber: document.getElementById("PhoneNumber").value,
      Message: document.getElementById("Message").value,
    };

    try {
      const response = await fetch("/query-submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.status) {
        // On success, change button text to 'Sent', apply green background, and show tick
        submitBtn.classList.remove("loading");
        submitBtn.classList.add("success");
        submitBtn.innerHTML = "✓ Sent";

        // Reset the form after 3 seconds
        setTimeout(() => {
          submitBtn.classList.remove("success");
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalButtonHTML; // Reset the button to its original state
          form.reset(); // Reset the form fields
        }, 1500);
      } else {
        // Display error below the button in red
        errorMessageDiv.textContent = "Submission Failed: " + result.message;

        // Reset the button state
        submitBtn.classList.remove("loading");
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalButtonHTML;
      }
    } catch (error) {
      console.error("Error:", error);

      // Display error below the button in red
      errorMessageDiv.textContent =
        "An error occurred while submitting the form.";

      // Reset the button state
      submitBtn.classList.remove("loading");
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalButtonHTML;
    }
  });
})(jQuery);
