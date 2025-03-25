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
