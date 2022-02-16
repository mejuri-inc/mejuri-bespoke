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

   function animateWordByWord(element) {
      const SENTENCE_DELAY = 1000;

      element.innerHTML = element.textContent.split(' ').map(word => '<span class="faded-word">' + word + '</span>').join(' ');

      element.classList.replace("invisible", "visible");

      let wordsForFading = element.querySelectorAll('.faded-word');

      wordsForFading.forEach(word => {
         word.addEventListener('transitionend', startNextWordAnimation);
      });

      function startNextWordAnimation(e) {
         let nextWord = e.target.nextElementSibling;
         if (nextWord) {
            nextWord.classList.add('faded-activated');
         } else {
            let nextSentence = e.target.parentElement.nextElementSibling;
            startSentence(nextSentence);
         }
      }

      startSentence(element);

      function startSentence(sentenceElement) {
         if (!sentenceElement) {
            return;
         }
         const listItems = sentenceElement.children;
         const listArray = Array.from(listItems);

         listArray.forEach((word, index) => {
            let delay = index * 100 + SENTENCE_DELAY
            setTimeout(() => {
               word.classList.add('faded-activated');
            } , delay )         
         });           
      }
   }

   const intersectionObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
         if (entry.isIntersecting) {
            animateWordByWord(entry.target)
            observer.unobserve(entry.target);
         }
      });
   });

   const wordByWordElements = [...document.querySelectorAll('.word-by-word')];

   wordByWordElements.forEach((element) => intersectionObserver.observe(element));

});

