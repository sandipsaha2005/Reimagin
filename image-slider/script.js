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
  animateSlide(0);  // Animate the first slide
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

// Previous Button
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
  slidesContainer.style.transform = "translateX(-" + slideWidth * slideNumber + "px)";
  currentSlide = slideNumber;
  setActiveClass();
  animateSlide(slideNumber);  // Animate the active slide
}

function setActiveClass() {
  let currentActive = document.querySelector(".slide-image.active");
  currentActive.classList.remove("active");
  slideImage[currentSlide].classList.add("active");

  let currentDot = document.querySelector(".single-dot.active");
  currentDot.classList.remove("active");
  navigationDots.children[currentSlide].classList.add("active");
}

function animateSlide(slideNumber) {
  const activeSlide = slideImage[slideNumber];
  const title = activeSlide.querySelector('.title');
  const img = activeSlide.querySelector('img');

  // Animate title and image with GSAP
  gsap.fromTo(title, {opacity: 0, y: 200}, {opacity: 1, y: 0, duration: 1, ease: 'power2.out'});
  gsap.fromTo(img, {scale: 1.2}, {scale: 1, duration: 1, ease: 'power2.out'}, "-=0.5");
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

// GSAP for Read More buttons
document.querySelectorAll('.read-more-btn').forEach(button => {
  button.addEventListener('click', function(e) {
    let ripple = this.querySelector('.ripples');
    gsap.fromTo(ripple, {
      border: '1px solid #fff',
      left: e.offsetX,
      top: e.offsetY,
      height: 0,
      width: 0,
      opacity: 1,
    }, {
      border: '0px solid #fff',
      height: 60,
      width: 60,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    });
  });
});



// split text effect h1 and p
var tlSplitGreat = gsap.timeline({
  onComplete: () => {
    SplitGreat.revert();
  },
  }),
  SplitGreat = new SplitText("h1 ,p", {
    type: "words, chars"
  }),
  chars = SplitGreat.chars;

tlSplitGreat.from(
chars, {
  duration: 0.8,
  opacity: 0,
  y: 0,
  ease: "circ.out",
  stagger: 0.02
},
"+=0"
);