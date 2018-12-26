$(document).ready(function() {
  $(".subscribe__group a.btn").attr("href", "#contactForm");
  $("body").on("click", ".subscribe__group a.btn", function(event) {
    event.preventDefault();
    var id = $(this).attr("href"),
        top = $(id).offset().top - 70;
    if ($(".subscribe .form__input").val()) {
      $(".subscribe .form__input").removeClass("form__input_error");
      $(".subscribe .error").removeClass("active");
      $("body,html").animate({ scrollTop: top }, 1500);
    } else {
      $(".subscribe .form__input").addClass("form__input_error");
      $(".subscribe .error").addClass("active");
    }
  });
  $(".subscribe .form__input").focus(function() {
    $(".subscribe .form__input").removeClass("form__input_error");
    $(".subscribe .error").removeClass("active");
  });
});
