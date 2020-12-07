'use strict'

const form = document.forms.form;
const username = form.elements.username;
const pass1 = form.elements.password;
const pass2 = form.elements.password2;

function showError (input, message) {
   const small = input.nextElementSibling;
   small.innerHTML = message;
}

function success (input) {
   const small = input.nextElementSibling;
   small.style.opacity = '0';
}

function checkUserName (input, event) {
   let string = input.value.trim();
   if (isFinite(string[0])) {
      event.preventDefault();
      showError(input, `${getFieldName(input)} can't start with number`)
   } else return success(input)
}

function checkPass (pass1, pass2, event) {
   if (pass1.value !== pass2.value) {
      event.preventDefault();
      showError(pass2, `Attention! ${getFieldName(pass2)} is not equal ${getFieldName(pass1)}`)
   } else return success(input)
}
function getFieldName (input) {
   return input.getAttribute('id')
}
form.addEventListener('submit', function(event) {

   checkUserName(username, event);
   checkPass(pass1, pass2, event);
})