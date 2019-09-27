


// create variables targeting the input and button for the add player function
const nameInput = document.querySelector('#name-input');
const addPlayer = document.querySelector('#add-player');

 



// Function from MDN to get a random number https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
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
    randInput.classList.remove('available');
});

// Get all first round inputs
const firstRounds = document.querySelectorAll('[data-first-round]');
const secondRounds = document.querySelectorAll('[data-second-round]');


const nextRound = (el, round) => {
    // Add eventlistener to the element to listen for a 'click'
    el.addEventListener('click', () => {
        // Get the value of the input that has being clicked
        const player = el.value;
    
        // Set the value of the semi-final input equal to that of the value stored above
        round.value = player;
        round.classList.remove('available');        
    });
}

// Loop through all the first round input
for (let i = 0; i < firstRounds.length; i++) {
    const el = firstRounds[i];
    // Get the value of the data attribue (data-first-round="???")
    const group = el.dataset.firstRound;
    // Find the semi-final input, based on the value of the first round input
    const result = document.querySelector('[data-first-round-result="' + group + '"]');

    nextRound(el, result);
}

for (let i = 0; i < secondRounds.length; i++) {
    const el = secondRounds[i];

    const group = el.dataset.secondRound;

    const result = document.querySelector('[data-second-round-result="' + group + '"]');

    nextRound(el, result);
    
}

const winnerTwo = document.querySelector("#winner2");

const winnerOne = document.querySelector("#winner1");



const winner = (ele) => {
    ele.addEventListener('click', () => {

        window.alert("Well done, you have won!");

    });
}

winner(winnerTwo);
winner(winnerTwo);







function myFunction() {

    document.getElementById("name-input").disabled = true;

    //onclick="myFunction()" bad practise HTML code to disable the button
  }



