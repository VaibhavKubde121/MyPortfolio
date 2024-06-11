
let menuIcon = document.querySelector('.menu-icon');
let cancelIcon = document.querySelector('.cancel-icon');
let headerLinks = document.querySelector('.header-links');

menuIcon.addEventListener('click', function () {
  headerLinks.style.display = 'block';
  headerLinks.style.right = '0';
});

cancelIcon.addEventListener('click', function () {

  headerLinks.style.right = '-100vh';
  headerLinks.style.display = 'none';
});


let themeInput = document.getElementById('theme');
const root = document.documentElement; 
const primaryThemeColor = getComputedStyle(root).getPropertyValue('--primary-theme-color');
themeInput.value = primaryThemeColor;

themeInput.addEventListener('change', function () {
  
  const color = themeInput.value;
  document.documentElement.style.setProperty('--primary-theme-color', color);
});

// document.addEventListener('DOMContentLoaded', function () {
//   let currentIndex = 0;
//   const totalCards = document.querySelectorAll('.skill-cards-container .service-card').length;
//   const cardWidth = document.querySelector('.skill-cards-container .service-card').offsetWidth;

//   function nextCard() {
//     currentIndex = (currentIndex + 1) % totalCards;
//     updateSlider();
//   }

//   function updateSlider() {
//     const translateValue = -currentIndex * cardWidth;
//     document.querySelector('.skill-cards-container').style.transform = 'translateX(' + translateValue + 'px)';
//   }

//   setInterval(nextCard, 1000); // Change slide every 3 seconds (adjust as needed)
// });

// document.addEventListener('DOMContentLoaded', function () {
//   let currentIndex = 0;
//   const totalCards = document.querySelectorAll('.skill-cards-container .service-card').length;
//   const cardWidth = document.querySelector('.skill-cards-container .service-card').offsetWidth;

//   function nextCard() {
//     currentIndex = (currentIndex + 1) % totalCards;
//     updateSlider();
//   }

//   function updateSlider() {
//     const translateValue = -currentIndex * cardWidth;
//     document.querySelector('.skill-cards-container').style.transform = 'translateX(' + translateValue + 'px)';
//   }

//   setInterval(nextCard, 1000); // Change slide every 3 seconds (adjust as needed)
// });




