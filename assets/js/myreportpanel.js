(function ($) {
  "use strict";

  // ==================================
  // Myreport sliding cart
  // ==================================

  if ($(".tt-sliding-cart-wrap").length) {
    // Open myreport sliding cart
    $(".tt-sliding-cart-trigger").on("click", function () {
      $("body").toggleClass("tt-sliding-cart-open");
    });

    // Close myreport sliding cart
    $(".tt-sliding-cart-cover, .tt-sliding-cart-close, .tt-sliding-cart a")
      .not('[target="_blank"]') // omit from selection
      .not('[href^="#"]') // omit from selection
      .not(".tt-sc-product-remove") // omit from selection
      .on("click", function () {
        $("body").removeClass("tt-sliding-cart-open");
      });
  }
})(jQuery);
