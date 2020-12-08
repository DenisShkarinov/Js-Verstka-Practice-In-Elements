'use strict'

const container = document.querySelector('.container');
let selectedDiv;

function collapse (event) {
   if (selectedDiv) {
      selectedDiv.parentElement.classList.remove('active')
      selectedDiv.nextElementSibling.classList.remove('active-text');
   }
   selectedDiv = event;

   selectedDiv.parentElement.classList.add('active');
   selectedDiv.nextElementSibling.classList.add('active-text');
}

container.addEventListener('click', (event) => {
   let target = event.target;

   if (target.className != "faq__title" ) return

   collapse(target)
})