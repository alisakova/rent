let replyBtn = document.querySelectorAll("._reply");

const maxLimit = 2000;
let html = document.querySelector("html");
let htmlFontSize = parseFloat(
  window.getComputedStyle(html, null).getPropertyValue("font-size")
);


if (replyBtn.length > 0) {
  let replyFormTemplate = document
    .querySelector(".comments-form-template")
    .content.querySelector(".comments-form");
  let newReplyForm = replyFormTemplate.cloneNode(true);
  replyBtn.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
      let parentContainer = e.target.closest(".comments-item");
      let container = parentContainer.querySelector(".comments-item__content");
      let activeBtn = document.querySelector("._reply.active");
      if (btn !== activeBtn && activeBtn) {
        activeBtn.classList.remove("active");
        let activeContainer = activeBtn.closest(".comments-item");
        cleanInputs(activeContainer);
        let form = document.querySelector(".comments-form_answer");
        form.style.maxHeight = null;
        setTimeout(function() {
          container.removeChild(form);
        }, 250);
        setTimeout(function() {
          container.appendChild(replyFormTemplate);
          let targetHeight = replyFormTemplate.children[0].offsetHeight;
          replyFormTemplate.style.maxHeight = targetHeight / htmlFontSize + "rem";
          let textarea = container.querySelector(".comments-form textarea");
          let countSpan = container.querySelector(
            ".comments-form textarea + .form__counter ._counter"
          );
          countSymbols(textarea, countSpan);
        }, 250);
      }
      if (btn.classList.contains("active")) {
        console.log(1);
        btn.classList.remove("active");
        let form = document.querySelector(".comments-form_answer");
        form.style.maxHeight = null;
        cleanInputs(container);
        setTimeout(function() {
          container.removeChild(form);
        }, 250);
      } else {
        btn.classList.add("active");
        container.appendChild(replyFormTemplate);
        let textarea = container.querySelector(".comments-form textarea");
        let countSpan = container.querySelector(
          ".comments-form textarea + .form__counter ._counter"
        );
        countSymbols(textarea, countSpan);
        let targetHeight = replyFormTemplate.children[0].offsetHeight;
        replyFormTemplate.style.maxHeight = targetHeight / htmlFontSize + "rem";
      }
    });
  });
}

let textarea = document.querySelector(".comments-form textarea");
let countSpan = document.querySelector(
  ".comments-form textarea + .form__counter ._counter"
);

var countSymbols = function(textarea, countSpan) {
  textarea.addEventListener("input", function() {
    if (textarea.value.length > maxLimit) {
      textarea.value = textarea.value.substring(0, maxLimit);
    } else {
      countSpan.textContent = maxLimit - textarea.value.length;
    }
  });
};

var cleanInputs = function(parentContainer) {
  let textarea = parentContainer.querySelector(".comments-form textarea");
  let countSpan = parentContainer.querySelector(
    ".comments-form textarea + .form__counter ._counter"
  );
  let checkboxes = parentContainer.querySelectorAll(".checkbox input");
  let inputs = parentContainer.querySelectorAll(".form__input");
  textarea.value = null;
  countSpan.textContent = '2000';
  checkboxes.forEach(function(item) {
    item.checked = false;
  })
  inputs.forEach(function(item) {
    item.value = null;
  })
}

if (textarea) {
  countSymbols(textarea, countSpan);
}
