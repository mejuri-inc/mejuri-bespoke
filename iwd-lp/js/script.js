document.addEventListener("DOMContentLoaded", function (event) {

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
         if (elementInView(el, 1)) {
            displayScrollElement(el);
         } else if (elementOutofView(el)) {
            hideScrollElement(el)
         }
      })
   }

   window.addEventListener("scroll", () => {
      handleScrollAnimation();
   });

   //JUMP TO WHY SECTION
   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });

});

