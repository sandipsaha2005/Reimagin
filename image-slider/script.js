const slideImage = document.querySelectorAll(".slide-image");
const slidesContainer = document.querySelector(".slides-container");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const navigationDots = document.querySelector(".navigation-dots");

let numberOfImages = slideImage.length;
let slideWidth = slideImage[0].clientWidth;
let currentSlide = 0;
let slideInterval; 

function init() {
  slideImage.forEach((img, i) => {
    img.style.left = i * 100 + "%";
  });

  slideImage[0].classList.add("active");

  createNavigationDots();
  
  startSlideInterval(); 
}

init();


function createNavigationDots() {
  for (let i = 0; i < numberOfImages; i++) {
    const dot = document.createElement("div");
    dot.classList.add("single-dot");
    navigationDots.appendChild(dot);

    dot.addEventListener("click", () => {
      goToSlide(i);
    });
  }

  navigationDots.children[0].classList.add("active");
}


function startSlideInterval() {
  slideInterval = setInterval(nextSlide, 5000);
}


function nextSlide() {
  if (currentSlide >= numberOfImages - 1) {
    goToSlide(0);
  } else {
    goToSlide(currentSlide + 1);
  }
}


nextBtn.addEventListener("click", () => {
  nextSlide();
  clearInterval(slideInterval); 
  startSlideInterval(); 
});


prevBtn.addEventListener("click", () => {
  if (currentSlide <= 0) {
    goToSlide(numberOfImages - 1);
  } else {
    goToSlide(currentSlide - 1);
  }
  clearInterval(slideInterval); 
  startSlideInterval(); 
});


function goToSlide(slideNumber) {
  slidesContainer.style.transform =
    "translateX(-" + slideWidth * slideNumber + "px)";

  currentSlide = slideNumber;

  setActiveClass();
}


function setActiveClass() {
  
  let currentActive = document.querySelector(".slide-image.active");
  currentActive.classList.remove("active");
  slideImage[currentSlide].classList.add("active");

  
  let currentDot = document.querySelector(".single-dot.active");
  currentDot.classList.remove("active");
  navigationDots.children[currentSlide].classList.add("active");
}
let lastWidth = window.innerWidth;
let resizeTimeout;

window.addEventListener('resize', function() {
  
  clearTimeout(resizeTimeout);

  
  resizeTimeout = setTimeout(function() {
    
    if (window.innerWidth !== lastWidth) {
      location.reload();
      lastWidth = window.innerWidth; 
    }
  }, 150); 
});
