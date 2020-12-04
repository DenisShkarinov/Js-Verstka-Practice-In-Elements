const burgerBtn = document.querySelector('.burger');
const sidebar = document.querySelector('.sidebar');

burgerBtn.addEventListener('click', (event) => {
   event.stopPropagation();
   if (!event.target.classList.contains('burger') ) return;
   event.target.classList.toggle('active');

   sidebar.classList.toggle('active');
})