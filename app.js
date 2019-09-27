


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
 const semiFinalTwo2 = document.querySelectorAll('.semi-final-two-1');



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
    });
}

// Loop through all the first round input
for (let i = 0; i < firstRounds.length; i++) {
    const el = firstRounds[i];
    // Get the value of the data attribue (data-first-round="???")
    const group = el.dataset.firstRound;
    // Find the semi-final input, based on the value of the first round input
    const semiFinal = document.querySelector('[data-first-round-result="' + group + '"]');

    nextRound(el, semiFinal);
}

for (let i = 0; i < secondRounds.length; i++) {
    const ele = secondRounds[i];

    const group2 = ele.dataset.secondRound;

    const final = document.querySelector('[data-second-round-result="' + group2 + '"]');

    nextRound(ele,final);
    
}




/* player1.addEventListener('click', () => {

    
    const player1Value = player1.value
    
    const randNum1=getRandomInt(semiFinalOne.length -1);

    const randInput1 = semiFinalOne[randNum1];

    randInput1.value = player1Value;



})


player2.addEventListener('click', () => {

    const player2Value = player2.value
    
    const randNum1=getRandomInt(semiFinalOne.length -1);

    const randInput1 = semiFinalOne[randNum1];

    randInput1.value = player2Value;



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


player5.addEventListener('click', () => {

    const player5Value = player5.value
    
    const randNum5=getRandomInt(semiFinalTwo.length -1);

    const randInput5 = semiFinalTwo[randNum5];

    randInput5.value = player5Value;



})

player6.addEventListener('click', () => {

    const player6Value = player6.value
    
    const randNum6=getRandomInt(semiFinalTwo.length -1);

    const randInput6 = semiFinalTwo[randNum6];

    randInput6.value = player6Value;



})

player7.addEventListener('click', () => {

    const player7Value = player7.value
    
    const randNum7=getRandomInt(semiFinalTwo2.length -1);

    const randInput7 = semiFinalTwo2[randNum7];

    randInput7.value = player7Value;

})

player8.addEventListener('click', () => {

    const player8Value = player8.value
    
    const randNum8=getRandomInt(semiFinalTwo2.length -1);

    const randInput8 = semiFinalTwo2[randNum8];

    randInput8.value = player8Value;



})
 */
function myFunction() {

    document.getElementById("name-input").disabled = true;

    //onclick="myFunction()" bad practise HTML code to disable the button
  }



