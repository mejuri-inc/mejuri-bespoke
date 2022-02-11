//ANIMATIONS ON SCROLL START--

const scrollElements = document.querySelectorAll(".js-scroll", ".faded-sentence");

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


//JUMP NEXT PAGE
let heroButton = document.querySelector(".section__hero button");

heroButton.addEventListener("click", function () {
   window.scroll({
      top: 940,
      left: 0,
      behavior: 'smooth'
   })
});
