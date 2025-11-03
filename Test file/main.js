let count = 0;
const counterValueElement = document.getElementById('counter-value');
const decreaseBtn = document.getElementById('decrease-btn');
const resetBtn = document.getElementById('reset-btn');
const increaseBtn = document.getElementById('increase-btn');

function updateDisplay() {
    counterValueElement.textContent = count;
    if (count > 0) {
        counterValueElement.style.color = 'green';
    } else if (count < 0) {
        counterValueElement.style.color = 'red';
    } else {
        counterValueElement.style.color = 'black';
    }
}

decreaseBtn.addEventListener('click', () => {
    count--;
    updateDisplay();
});

increaseBtn.addEventListener('click', () => {
    count++;
    updateDisplay();
});

resetBtn.addEventListener('click', () => {
    count = 0;
    updateDisplay();
});

// Initial display setup
updateDisplay();
