'use strict';

window.addEventListener('DOMContentLoaded', () => {
   let currentDay = new Date();
   let newYearMs = new Date( Date.parse("2021-01-01T00:00:00.000"));
   let daysLeft = Math.round((newYearMs - +currentDay) / (1000*60*60*24)),
      hours = 24 - currentDay.getHours(),
      minutes = 60 - currentDay.getMinutes(),
      seconds = currentDay.getSeconds();
   let daysEl = document.getElementById('days');
   let hoursEl = document.getElementById('hours');
   let minEl = document.getElementById('minutes');
   let secEl = document.getElementById('seconds');

   const timer = () => {
      secEl.innerHTML = `<h2>${seconds}</h2>`;
      minEl.innerHTML = `<h2>${minutes}<h2>`;
      hoursEl.innerHTML = `<h2>${hours}</h2>`;
      daysEl.innerHTML = `<h2>${daysLeft}</h2>`
      --seconds;
      if (seconds == 0) {
         minutes--;
         seconds = 60
      }
      if (minutes == 0) {
         hours--;
         minutes = 60
      }
      if (hours == 0) {
         daysLeft--;
         hours = 24
      }
      if (daysLeft == 0 && hours == 0 && minutes == 0 && seconds == 0) {
         const title = document.querySelector('.timer-header > h2');
         title.innerHTML = "HAPPY new Year!"
         clearInterval();
      }
   }
   setInterval(timer, 1000);
})