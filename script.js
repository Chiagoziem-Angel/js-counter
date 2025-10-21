// STEP 1: SELECT THE ELEMENTS FROM HTML
// Think of this like saying "Hey JS, find me that counter display"
const counterDisplay = document.getElementById('counter');
const decreaseBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');
const increaseBtn = document.getElementById('increase');

// STEP 2: CREATE A VARIABLE TO TRACK THE COUNT
// This is like a box that holds our number
let count = 100;

// STEP 3: CREATE FUNCTIONS (reusable blocks of code)

// This function increases the count
function increase() {
    count = count + 1;  // or count++
    counterDisplay.textContent = count;  // Update what user sees
}

// This function decreases the count
function decrease() {
    if (count > 0) {
    count = count - 1;  // or count--
    counterDisplay.textContent = count;
    }
}

// This function resets the count to 0
function reset() {
    count = 0;
    counterDisplay.textContent = count;
}

// STEP 4: CONNECT BUTTONS TO FUNCTIONS
// This says "When someone clicks increase button, run increase function"
increaseBtn.addEventListener('click', increase);
decreaseBtn.addEventListener('click', decrease);
resetBtn.addEventListener('click', reset);
