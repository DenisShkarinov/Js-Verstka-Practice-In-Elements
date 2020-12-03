'use strict';
const accordion = document.getElementById('accordion')
const accordionItem = document.querySelectorAll('.accordion-item')

function initAccordion(accordionElem){

   //when panel is clicked, handlePanelClick is called.          
   function handlePanelClick(event){
      showItem(event.currentTarget);
   }
 //Hide currentPanel and show new panel.  
   
   function showItem(item){
     //Hide current one. First time it will be null. 
      let expandedPanel = accordionElem.querySelector(".show");
      if (expandedPanel){
         expandedPanel.classList.remove("show");
      }
      //Show new one
      item.classList.add("show");
   }
   let allPanelElems = accordionItem;
   for (let item of allPanelElems){
      item.addEventListener("click", handlePanelClick);
   }
}
initAccordion(accordion);