


// create variables targeting the input and button for the add player function
const nameInput = document.querySelector('#name-input');
const addPlayer = document.querySelector('#add-player');
const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2');
const player3 = document.querySelector('#player3');
const player4 = document.querySelector('#player4');
 //get all the inputs for semi final one and store in a variable
 const semiFinalOne = document.querySelectorAll('.semi-final-one');
 const semiFinalOne2 = document.querySelectorAll('.semi-final-one-1');
 const semiFinalTwo = document.querySelectorAll('.semi-final-two');


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




player1.addEventListener('click', () => {

    
    const player1Value = player1.value
    
    const randNum1=getRandomInt(semiFinalOne.length -1);

    const randInput1 = semiFinalOne[randNum1];

    randInput1.value = player1Value;



})


player2.addEventListener('click', () => {

    const player2Value = player2.value
    
    const randNum2=getRandomInt(semiFinalOne.length -1);

    const randInput2 = semiFinalOne[randNum2];

    randInput2.value = player2Value;



})

player3.addEventListener('click', () => {

    const player3Value = player3.value
    
    const randNum3=getRandomInt(semiFinalOne2.length -1);

    const randInput3 = semiFinalOne2[randNum3];

    randInput3.value = player3Value;



})

player4.addEventListener('click', () => {

    const player4Value = player4.value
    
    const randNum4=getRandomInt(semiFinalOne2.length -1);

    const randInput4 = semiFinalOne2[randNum4];

    randInput4.value = player4Value;



})



function myFunction() {

    document.getElementById("name-input").disabled = true;

    //onclick="myFunction()" bad practise HTML code to disable the button
  }



