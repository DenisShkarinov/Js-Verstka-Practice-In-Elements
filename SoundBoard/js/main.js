'use strict';
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
const buttons = document.querySelector('.buttons');

sounds.forEach(sound => {
   const btn = document.createElement('button');
   btn.classList.add('btn');
   btn.innerText = sound;
   
   btn.addEventListener('click', () => {
      stopSongs()

      document.getElementById(sound).play();
   })
   buttons.append(btn)
})

function stopSongs() {
   sounds.forEach(sound => {
      const song = document.getElementById(sound);

      song.pause();
      song.currentTime = 0
   })
}