'use strict';

const container = document.querySelector('.container');
let selectedTag;
const form = document.forms.todo;
const input = form.elements.task;
const deleteBtn = document.querySelectorAll('.delete');
const ol = document.createElement('ol');
ol.type = "I"
ol.classList.add('todo-list');
container.append(ol);

function toggleTags(tag) {
   if (selectedTag) {
      selectedTag.classList.remove('active')
   }
   selectedTag = tag;
   selectedTag.classList.add('active')
}

function creatingToDo() {
   const li = document.createElement('li');
   li.insertAdjacentHTML('beforeend', `<span>${input.value}</span> <button class="delete">Delete</button>`) 
   ol.append(li)
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

for (let button of deleteBtn) {
   deleteBtn.addEventListener('click', (e) => {
      let target = e.target;
      alert(button)
   })
}
