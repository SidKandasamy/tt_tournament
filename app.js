
// Function from MDN to get a random number https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

// create variables targeting the input and button for the add player function
const nameInput = document.querySelector('#name-input');
const addPlayer = document.querySelector('#add-player');


// Add event listener to the button
addPlayer.addEventListener('click', () => {
    // Get all the first round inputs and store them in a variable
    const firstRoundInputs = document.querySelectorAll('.first-round-input.available');
    // Store the value of the input in variable
    const inputVal = nameInput.value;
    // Get a random number based on the amount on inputs in the first round - this comes in an array (minus 1 because arrays start at 0)
    const randNum = getRandomInt(firstRoundInputs.length - 1);

    const randInput = firstRoundInputs[randNum];
    // Get the element based on the random number selected and set the value to be equal to the value on the name input
    randInput.value = inputVal;
    // Remove avaiable class so we can't populate the same input
    const available = randInput.classList.remove('available');

    
    
});

//do alert in js if all boxes filled or disable the input

// const endDraw = document.querySelector("Button").disabled = true;

//    if (randNum >= 8){
//        return  endDraw
//    } 

//      if ()