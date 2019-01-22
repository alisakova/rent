let replyBtn = document.querySelectorAll("._reply");
let replyFormTemplate = document
  .querySelector(".comments-form-template")
  .content.querySelector(".comments-form");
var newReplyForm = replyFormTemplate.cloneNode(true);

replyBtn.forEach(function(btn) {
  btn.addEventListener("click", function(e) {
    let parentContainer = e.target.closest(".comments-item");
    let container = parentContainer.querySelector(".comments-item__content");
    let replyBtnActive = document.querySelector("._reply.active");
    let html = document.querySelector("html");
    let htmlFontSize = parseFloat(
      window.getComputedStyle(html, null).getPropertyValue("font-size")
    );

    if (btn.classList.contains("active")) {
      btn.classList.remove("active");
      let form = document.querySelector(".comments-form_answer");
      form.style.maxHeight = null;
      setTimeout(function() {
        container.removeChild(form);
      }, 250);
    } else if (replyBtnActive && replyBtnActive !== btn) {
      replyBtnActive.classList.remove("active");
      let parentOfActiveBtn = replyBtnActive.closest(".comments__item");
      let containerOfActiveBtn = parentOfActiveBtn.querySelector(".comments-item__content");
      let form = containerOfActiveBtn.querySelector(".comments-form_answer");
      form.style.maxHeight = null;
      setTimeout(function() {
        container.removeChild(form);
      }, 250);
      btn.classList.add("active");
      container.appendChild(replyFormTemplate);
      let targetHeight = replyFormTemplate.children[0].offsetHeight;
      replyFormTemplate.style.maxHeight = targetHeight / htmlFontSize + "rem";
    } else {
      btn.classList.add("active");
      container.appendChild(replyFormTemplate);
      let targetHeight = replyFormTemplate.children[0].offsetHeight;
      replyFormTemplate.style.maxHeight = targetHeight / htmlFontSize + "rem";
    }
  });
});

let textarea = document.querySelectorAll(".comments-form textarea");
let countSpan = document.querySelector(
  ".comments-form textarea + .form__counter ._counter"
);
const maxLimit = 2000;

textarea.forEach(function(area) {
  area.addEventListener("input", function() {
    if (area.value.length > maxLimit) {
      area.value = area.value.substring(0, maxLimit);
    } else {
      countSpan.textContent = maxLimit - area.value.length;
    }
  });
});
