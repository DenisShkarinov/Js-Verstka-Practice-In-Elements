'use strict';

let date=new Date(2021,10,25,12,30,30);
let dateNow=new Date();
let dateMs=Date.parse('2021-10-25T12:30:30.000-07:00'),
dateNowMs=Date.parse(dateNow);
let days = Math.round((dateMs-dateNowMs)/(1000*60*60*24)),
   hours = 24 - dateNow.getHours(),
   minutes = 60 - dateNow.getMinutes(),
   seconds = 60 - dateNow.getSeconds();

(function() {
   let daysEl = document.getElementById('days');
   let hoursEl = document.getElementById('hours');
   let minEl = document.getElementById('minutes');
   let secEl = document.getElementById('seconds');
   
   let timer = setInterval(function() {
      secEl.innerHTML = `<p>${seconds} seconds</p>`;
      minEl.innerHTML = `<p>${minutes} minutes</p>`;
      hoursEl.innerHTML = `<p>${hours} hours</p>`;
      daysEl.innerHTML = `<p>${days} days</p>`;
      --seconds;
      if (seconds == 0) {
         seconds = 60;
         --minutes;
      }
      if (minutes == 0) {
         minutes=60;
         --hours;
      }
      if (hours == 0) {
         hours = 24;
         --days;
      }
      
   }, 1000)
})();