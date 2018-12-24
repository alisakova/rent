$("._submit-modal").click(function(event) {
  event.preventDefault();
  $("#submit-modal").modal();
  return false;
});

$("._download-btn").click(function(event) {
  event.preventDefault();
  $("#download-modal").modal();
  return false;
});
