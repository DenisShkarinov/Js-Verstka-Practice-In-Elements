'use strict';



function initExpanding() {
   const cardWrapper = document.querySelector('.card-wrapper');
   let selectedImg;

   cardWrapper.addEventListener("click", event => {
      let target = event.target;
      if (!target.classList.contains('card-body')) return;
      
      expandingImg(target)
   })

   function expandingImg (img) {
      if (selectedImg) {
         selectedImg.classList.remove('active')
      }

      selectedImg = img;
      selectedImg.classList.add('active');
   }
}

initExpanding();