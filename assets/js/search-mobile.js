let searchBtn = document.querySelector(".search-mobile__btn");
let searchMobile = document.querySelector(".article-header__row_search");

searchBtn.addEventListener("click", function() {
  searchMobile.classList.toggle("active");
});
