const number = document.querySelector('#digit');
let currentValue = 0;
const addButton = document.querySelector('#increment');
const subButton = document.querySelector('#decrement');
const resetButton = document.querySelector('#reset');

addButton.addEventListener('click', () => {
    currentValue++;
    number.textContent = currentValue;
    number.style.color = '#009432';
});
subButton.addEventListener('click', () => {
    if (currentValue > 0){
        currentValue--;
        number.textContent = currentValue;
        number.style.color = '#ea2027';
        if(currentValue === 0){
            number.style.color = '#191919';
        }
        
    } 
});
resetButton.addEventListener('click', () => {
        currentValue = 0;
        number.textContent = currentValue;
        number.style.color = '#191919'; 
});
