'use strict';

/*const jokes = ['Why do bees have sticky hair? Because they use honey combs!',
'I was wondering why the frisbee was getting bigger, then it hit me.',
'It was raining cats and dogs the other day. I almost stepped in a poodle.',
'How come a man driving a train got struck by lightning? He was a good conductor.',
'“Doctor, I’ve broken my arm in several places” Doctor “Well don’t go to those places.”',
'Sometimes I tuck my knees into my chest and lean forward. That’s just how I roll.',
'Yesterday a clown held a door open for me. I thought it was a nice jester.',
'Can I watch the TV? Dad: Yes, but don’t turn it on.',
'What is the best way to carve? Whittle by whittle.',
'I burned 2000 calories today, I left my food in the oven for too long.',
'What do you call a fake noodle? An impasta.',
'It\'s only a murder of crows if there\'s probable caws.'];

const jokeBlock = document.getElementById('joke');
const jokeBtn = document.getElementById('joke-btn');


jokeBtn.addEventListener('click', () => {
  let jokesRand = getRandomInt(jokes.length);
  jokeBlock.innerText = jokes[jokesRand];
})
function getRandomInt (num) {
   return Math.floor(Math.random() * num)
}
*/
const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('joke-btn');

jokeBtn.addEventListener('click', generateJoke)
generateJoke()
// USING ASYNC/AWAIT
async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

  const res = await fetch('https://icanhazdadjoke.com', config)

  const data = await res.json()

  jokeEl.innerHTML = data.joke
}