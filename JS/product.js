const productImages = document.querySelectorAll(".product-images img");
const productImagesSlide = document.querySelector(".image-slider");
const sizeBtns = document.querySelectorAll(".size-radio-btn");

let activeImageSlide = 0;
let checkedBtn = 0;

productImages.forEach((item, i) => {
  item.addEventListener("click", () => {
    productImages[activeImageSlide].classList.remove("active");
    item.classList.add("active");
    productImagesSlide.style.backgroundImage = `url('${item.src}')`;
    activeImageSlide = i;
  });
});

sizeBtns.forEach((item, i) => {
  item.addEventListener("click", () => {
    sizeBtns[checkedBtn].classList.remove("check");
    item.classList.add("check");
    checkedBtn = i;
  });
});
