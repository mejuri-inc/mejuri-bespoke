//ANIMATIONS ON SCROLL START--

const scrollElements = document.querySelectorAll(".js-scroll", ".unactive-sentence");

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
   element.classList.replace("unactive-sentence", "faded-sentence");
};

const hideScrollElement = (element) => {
   element.classList.remove("scrolled");
   element.classList.replace("faded-sentence", "unactive-sentence");
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

var observer = new MutationObserver(function (mutations, instance) {
   let sentencesForFading = document.querySelectorAll(".faded-sentence");

   if (sentencesForFading.length) {
      console.log(sentencesForFading);
      //const SENTENCE_DELAY = 1000;
      //let sentencesForFading = document.querySelectorAll('.faded-sentence');

      sentencesForFading.forEach(sentence => {
         sentence.innerHTML = sentence.textContent.split(' ').map(word => '<span class="faded-word">' + word + '</span>').join(' ');
         console.log("forEachSentence");
      });

      let wordsForFading = document.querySelectorAll('.faded-word');

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

      startSentence(document.querySelector('.faded-sentence'));

      function startSentence(sentenceElement) {
         if (!sentenceElement) {
            return;
         }
         setTimeout(() => {
            sentencesForFading.forEach(word => {
               word.querySelector('.faded-word').classList.add('faded-activated');
            });

         }/* , SENTENCE_DELAY */)
      }


      instance.disconnect();
      return;
   }
});

observer.observe(document, {
   childList: true,
   subtree: true
});


//JUMP NEXT PAGE
let heroButton = document.querySelector("#sectionHero button");
heroButton.addEventListener("onClick", () => {
   window.scroll({
      top: 500, 
      left: 0, 
      behavior: 'smooth'
    });
});

