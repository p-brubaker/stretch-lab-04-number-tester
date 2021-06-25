// import functions
import { isEven } from './is-even.js';
// reference needed DOM elements
const input = document.getElementById('num-input');
const submit = document.getElementById('submit-num');

const even = document.getElementById('even-img');
const odd = document.getElementById('odd-img');

function showCorrectImage() {
  const userNum = parseInt(input.value);
  const result = isEven(userNum);

  if (result === true) {
    even.style.display = 'block';
    odd.style.display = 'none'
  } else if ( result === false ) {
    even.style.display = 'none';
    odd.style.display = 'block';
  } else return;

} 

submit.addEventListener('click', () => showCorrectImage());

// set event listeners 
  // get user input(s)
  // do any needed work with the value(s)
  // update DOM to reflect new value(s)
