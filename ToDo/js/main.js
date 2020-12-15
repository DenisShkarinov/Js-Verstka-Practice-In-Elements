'use strict';

const container = document.querySelector('.container');
let selectedTag;
const form = document.forms.todo;
const input = form.elements.task;

function toggleTags(tag) {
   
   if (selectedTag) {
      selectedTag.classList.remove('active')
   }
   selectedTag = tag;
   selectedTag.classList.add('active')
}
function creatingToDo() {
   const ul = document.querySelector('.todo-list');
   const li = document.createElement('li');
   const checkbox = document.createElement('input');
   checkbox.setAttribute('type', 'checkbox')
   li.innerHTML = `<span>${checkbox}</span><span>${input.value}</span> <button class="delete">Delete</button>`
   ul.append(li)
   console.log(li)
}
function deleteItem() {

}

container.addEventListener('click', (event) => {
   let target = event.target;
   if (target.tagName != "A") return;
   event.preventDefault()
   toggleTags(target)
})

form.addEventListener('submit', (event) => {
   event.preventDefault()
   creatingToDo()
})