// STEP 1: SELECT THE ELEMENTS FROM HTML
// Think of this like saying "Hey JS, find me that counter display"
const counterDisplay = document.getElementById('counter');
const decreaseBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');
const increaseBtn = document.getElementById('increase');

// STEP 2: CREATE A VARIABLE TO TRACK THE COUNT
// This is like a box that holds our number
let count = 0;

// STEP 3: CREATE FUNCTIONS (reusable blocks of code)

// This function increases the count
function increase() {
    count = count + 1;  // or count++
    counterDisplay.textContent = count;  // Update what user sees
   if (count > 0) {
    counterDisplay.style.color = '#51cf66';  // green
} else if (count < 0) {
    counterDisplay.style.color = '#ff6b6b';  // red
} else {
    counterDisplay.style.color = '#333';     // black
} 
}

// This function decreases the count
function decrease() {
    count = count - 1;  // or count--
    counterDisplay.textContent = count;
    if (count > 0) {
    counterDisplay.style.color = '#51cf66';  // green
} else if (count < 0) {
    counterDisplay.style.color = '#ff6b6b';  // red
} else {
    counterDisplay.style.color = '#333';     // black
}
}

// This function resets the count to 0
function reset() {
    count = 0;
    counterDisplay.textContent = count;
    if (count > 0) {
    counterDisplay.style.color = '#51cf66';  // green
} else if (count < 0) {
    counterDisplay.style.color = '#ff6b6b';  // red
} else {
    counterDisplay.style.color = '#333';     // black
}

    const increase5Btn = document.getElementById('increase5');
const decrease5Btn = document.getElementById('decrease5');

function increaseByFive() {
    count = count + 5;
    counterDisplay.textContent = count;
    if (count > 0) {
    counterDisplay.style.color = '#51cf66';  // green
} else if (count < 0) {
    counterDisplay.style.color = '#ff6b6b';  // red
} else {
    counterDisplay.style.color = '#333';     // black
    }
    // Don't forget the color change code!
}

function decreaseByFive() {
    count = count - 5;
    counterDisplay.textContent = count;
    if (count > 0) {
    counterDisplay.style.color = '#51cf66';  // green
} else if (count < 0) {
    counterDisplay.style.color = '#ff6b6b';  // red
} else {
    counterDisplay.style.color = '#333';     // black
    }
    // Don't forget the color change code!
}

increase5Btn.addEventListener('click', increaseByFive);
decrease5Btn.addEventListener('click', decreaseByFive);
}

// STEP 4: CONNECT BUTTONS TO FUNCTIONS
// This says "When someone clicks increase button, run increase function"
increaseBtn.addEventListener('click', increase);
decreaseBtn.addEventListener('click', decrease);
resetBtn.addEventListener('click', reset);
