'use strict'

const body = document.body;
const insert = document.getElementById('insert');

function generateBlock(event) {
   insert.innerHTML = `
   <div class="key">
      ${event.key === ' ' ? 'Space' : event.key} 
      <small>event.key</small>
   </div>
   <div class="key">
      ${event.keyCode}
      <small>event.keyCode</small>
   </div>
   <div class="key">
      ${event.code}
      <small>event.code</small>
   </div>
   `
}

body.addEventListener('keydown', (event) => {
   event.preventDefault();
   generateBlock(event)
})