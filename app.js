
// import functions and grab DOM elements

// initialize state

// set event listeners to update state and DOM
import { add, sub, times, div } from './utilities.js';

const addNumber1 = document.getElementById('add-number-1');
const addNumber2 = document.getElementById('add-number-2');
const addButton = document.getElementById('add-button');
const addSolution = document.getElementById('add-solution');
addButton.addEventListener('click', () => {
    console.log(addSolution);
    addSolution.textContent = add(Number(addNumber1.value), Number(addNumber2.value));
});
const subNumberEl1 = document.getElementById('sub-number-1');
const subNumberEl2 = document.getElementById('sub-number-2');
const subButton = document.getElementById('sub-button');
const subResultsEl = document.getElementById('sub-results');

const subNumber1 = document.getElementById('sub-number-1');
const subNumber2 = document.getElementById('sub-number-2');
const subButton = document.getElementById('sub-button');
const subSolution = document.getElementById('sub-solution');
subButton.addEventListener('click', () => {
    console.log(subSolution);
    subSolution.textContent = sub(Number(subNumber1.value), Number(subNumber2.value));
});

const timesNumber1 = document.getElementById('times-number-1');
const timesNumber2 = document.getElementById('times-number-2');
const timesButton = document.getElementById('times-button');
const timesSolution = document.getElementById('times-solution');
timesButton.addEventListener('click', () => {
    console.log(timesSolution);
    timesSolution.textContent = times(Number(timesNumber1.value), Number(timesNumber2.value));
});

const divideNumber1 = document.getElementById('divide-number-1');
const divideNumber2 = document.getElementById('divide-number-2');
const divideButton = document.getElementById('divide-button');
const divideSolution = document.getElementById('divide-solution');
divideButton.addEventListener('click', () => {
    console.log(divideSolution);
    divideSolution.textContent = div(Number(divideNumber1.value), Number(divideNumber2.value));
});