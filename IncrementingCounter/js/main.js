'use strict'

const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
   counter.innerHTML = '0';
   const updateCounter = () => {
      const target = +counter.dataset.target;
      const counterValue = +counter.innerText;
      // * Increment - шаг
      const increment = target / 200;

      if (counterValue < target) {
         counter.innerText = `${Math.ceil(counterValue + increment)}`
         setTimeout(updateCounter, 1)
      } else {
         counter.innerText = target
      }
   }
   
   updateCounter()
})