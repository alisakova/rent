"use strict";

// mobile navigation
let navLink = document.querySelector(".header__nav-link");
let navMenu = document.querySelector(".header + .navigation");

function navOpen(el, target) {
  el.classList.add("active");
  target.classList.add("visible");
}

function navClose(el, target) {
  el.classList.remove("active");
  target.classList.remove("visible");
}

navLink.addEventListener("click", e => {
  e.preventDefault();
  if (navLink.classList.contains("active")) {
    navClose(navLink, navMenu);
  } else {
    navOpen(navLink, navMenu);
  }
});

let radioInputs = document.querySelectorAll("input[type='radio']");
let labels = document.querySelectorAll(".subscribe__label");

labels.forEach(function(label) {
  label.addEventListener("click", function() {
    let parent = label.closest(".subscribe__controls");
    let nearLabels = parent.querySelectorAll(".subscribe__label");
    let input = parent.querySelector("input[type='radio']");
    nearLabels.forEach(function(elem) {
      if (elem.classList.contains("active")) {
        elem.classList.remove("active");
      }
    })
    label.classList.add("active");
  });
});

//typed effect

if (document.querySelector("._typed-text")) {
  let options = {
    strings: ["subscribers", "renewals", "MRR"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true,
    showCursor: false,
  }

  let typed = new Typed("._typed-text", options);
}

function getParent(el, elData) {
  while ((el = el.parentElement) && !el.hasAttribute(elData));
  return el;
}

function toggleItem(event) {
  event.preventDefault();

  let elParent = getParent(this, "data-accordion", "item");
  let target = elParent.querySelector('[data-accordion="panel"]');
  let html = document.querySelector("html");
  let htmlFontSize = parseFloat(
    window.getComputedStyle(html, null).getPropertyValue("font-size")
  );
  let targetHeight = target.children[0].offsetHeight;

  target.style.height = targetHeight / htmlFontSize + "rem";
  // if (parent.classList.contains('active')) {
  //     parent.classList.remove('active');
  //     target.classList.remove('visible');
  // } else {
  //     parent.classList.add('active');
  //     target.classList.add('visible');
  // }
}

let accordionLink = document.querySelectorAll('[data-accordion="link"]');
let i;
for (i = 0; i < accordionLink.length; i++) {
  accordionLink[i].addEventListener("click", toggleItem, false);
  //accordionLink[i].addEventListener('click', toggleItem, false);
}
