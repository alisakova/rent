let replyBtn = document.querySelectorAll("._reply");
let replyFormTemplate = document.querySelector(".comments-form-template").content.querySelector(".comments-form");
var newReplyForm = replyFormTemplate.cloneNode(true);

replyBtn.forEach(function(btn) {
  btn.addEventListener("click", function(e) {
    let parentContainer = e.target.closest(".comments-item");
    if (btn.classList.contains("active")) {
      btn.classList.remove("active");
      let form = document.querySelector(".comments-form_answer");
      form.style.maxHeight = null;
      setTimeout(function() {
        parentContainer.removeChild(form);
      }, 1000);
    } else {
      btn.classList.add("active");
      parentContainer.appendChild(replyFormTemplate);
      let targetHeight = replyFormTemplate.children[0].offsetHeight;
      let html = document.querySelector("html");
      let htmlFontSize = parseFloat(
        window.getComputedStyle(html, null).getPropertyValue("font-size")
      );
      replyFormTemplate.style.maxHeight = targetHeight / htmlFontSize + "rem";
    }
  })
});


let textarea = document.querySelector(".comments-form textarea");
let countSpan = document.querySelector(".comments-form textarea + .form__counter ._counter");
const maxLimit = 2000;

textarea.addEventListener("input", function() {
  if (textarea.value.length > maxLimit) {
    textarea.value = textarea.value.substring(0, maxLimit);
  } else {
    countSpan.textContent = maxLimit - textarea.value.length;
  }
})
