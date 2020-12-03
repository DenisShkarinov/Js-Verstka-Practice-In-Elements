'use strict';

const searchButton = document.querySelector('.btn');
const searchBlock = document.querySelector('.search');
const input = document.querySelector('.input');

searchButton.addEventListener('click', () => {
   searchBlock.classList.toggle('active')
   input.focus();
})

input.addEventListener('blur', () => {
   searchBlock.classList.toggle('active')
})