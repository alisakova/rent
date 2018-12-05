"use strict";

// mobile navigation
let navLink = document.querySelector(".header__nav-link");
let navMenu = document.querySelector(".navigation");

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
    let input = label.querySelector("input[type='radio']");
    labels.forEach(function(elem) {
      if (elem.classList.contains("active")) {
        elem.classList.remove("active");
      }
    })
    label.classList.add("active");
  });
});

//accordion

// let accordionLink = document.querySelectorAll('[data-accordion="link"]');
// let i;
// for (i = 0; i < accordionLink.length; i++) {
//     console.log(i);
//     accordionLink[i].addEventListener('click', toggleItem, false);
// }
// function toggleItem(e) {
//     let parent = this.parentNode;
//     let target = parent.querySelector('[data-accordion="target"]');
//
//     e.preventDefault();
//
//     if (parent.classList.contains('active')) {
//         parent.classList.remove('active');
//         target.classList.remove('visible');
//     } else {
//         parent.classList.add('active');
//         target.classList.add('visible');
//     }
// }

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
