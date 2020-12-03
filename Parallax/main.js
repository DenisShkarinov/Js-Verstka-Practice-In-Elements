"use strict";

const parallax = document.getElementById('parallax');

window.addEventListener("scroll", function() {
   let offset = window.pageYOffset;
   //console.log("Offset: " + offset);
   parallax.style.backgroundPositionY = offset * .7 + "px";
})