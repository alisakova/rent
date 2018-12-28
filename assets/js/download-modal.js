$(document).ready(function() {
  $(".download-form .form__input").change(function() {
    if (
      $(".download-form #first-name").val() &&
      $(".download-form #mail").val()
    ) {
      $(".download-form .btn").removeClass("btn--success_inactive");
    } else {
      $(".download-form .btn").addClass("btn--success_inactive");
    }
  });
});
