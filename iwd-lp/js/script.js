//ANIMATIONS ON SCROLL START--

const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
   const elementTop = el.getBoundingClientRect().top;

   return (
      elementTop <=
      (window.innerHeight || document.documentElement.clientHeight) / dividend
   );
};

const elementOutofView = (el) => {
   const elementTop = el.getBoundingClientRect().top;

   return (
      elementTop > (window.innerHeight || document.documentElement.clientHeight)
   );
};

const displayScrollElement = (element) => {
   element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
   element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
   scrollElements.forEach((el) => {
      if (elementInView(el, 1.25)) {
         displayScrollElement(el);
      } else if (elementOutofView(el)) {
         hideScrollElement(el)
      }
   })
}

window.addEventListener("scroll", () => {
   handleScrollAnimation();
});
//ANIMATIONS ON SCROLL END--



//CHANGE WHAT SECTION IMAGE SRC START---
document.querySelector("#cardOne a").addEventListener('mouseover', function () {
   document.querySelector("#cardOne img").src = 'https://res.cloudinary.com/mejuri-com/image/upload/dpr_1.0,f_auto,q_60/v1643724738/FY22-IWD/FY22_IWD_LP_Page3_Onyx_Signet-HOVER.jpg';
});
document.querySelector("#cardTwo a").addEventListener('mouseover', function () {
   document.querySelector("#cardTwo img").src = 'https://res.cloudinary.com/mejuri-com/image/upload/dpr_1.0,f_auto,q_60/v1643724737/FY22-IWD/FY22_IWD_LP_Page3_Gold_Signet-HOVER.jpg';
});
document.querySelector("#cardThree a").addEventListener('mouseover', function () {
   document.querySelector("#cardThree img").src = 'https://res.cloudinary.com/mejuri-com/image/upload/dpr_1.0,f_auto,q_60/v1643724737/FY22-IWD/FY22_IWD_LP_Page3_Herringbone_Chain-HOVER.jpg';
});
//---CHANGE WHAT SECTION IMAGE SRC END