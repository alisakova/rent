$(document).ready(function() {
  $("body").on("click", ".subscribe__group a.btn", function(event) {
    event.preventDefault();
    var id = $(this).attr("href"),
        top = $(id).offset().top - 70;
    if ($(".subscribe .form__input").val()) {
      $("body,html").animate({ scrollTop: top }, 1500);
    }
  });
});
