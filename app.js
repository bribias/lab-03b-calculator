// import functions and grab DOM elements
const addInputEl1 = document.getElementById('add-input-1');
const addInputEl2 = document.getElementById('add-input-2');
const addButton = document.getElementById('add-button');
const addResultsEl = document.getElementById('add-results');

// initialize state

// set event listeners to update state and DOM
addButton.addEventListener('click', () => {
    // post-click logic goes here!

    // - do the calculation 
    //     - get the numbers from the inputs
    const number1 = addInputEl1.value;
    const number2 = addInputEl2.value;

    //     - add them together
    const sum = Number(number1) + Number(number2);
    // - show the results
    addResultsEl.textContent = sum;

});