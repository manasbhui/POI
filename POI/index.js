const p_model = document.querySelectorAll(".p-model");
const imgs = document.querySelectorAll(".img-card");
const close = document.querySelectorAll(".fa-xmark");

var modal = function (modalclick) {
  p_model[modalclick].classList.add("active");
}

imgs.forEach((imgCard, i) => {
  imgCard.addEventListener("click", () => {
    modal(i);
  });
});

close.forEach((pCloseBtn) => {
  pCloseBtn.addEventListener("click", () => {
    p_model.forEach((pMV) => {
      pMV.classList.remove("active");
    });
  });
});

window.addEventListener("scroll", () => {
  const indicatorBar = document.querySelector(".scr-indicator-bar");
  
  const pageScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollheight - document.documentElement.clientHeight;
  const scrollValue = (pageScroll/height)*100;

  indicatorBar.style.width = scrollValue + "%";
})