//your JS code here. If required.
function getNumbers() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            resolve(numbers);
        }, 3000);
    });
}

function filterEvenNumbers(numbers) {
    return new Promise((resolve) => {
        const evenNumbers = numbers.filter(num => num % 2 === 0);
        resolve(evenNumbers);
    });
}

function multiplyByTwo(evenNumbers) {
    return new Promise((resolve) => {
        const multipliedNumbers = evenNumbers.map(num => num * 2);
        resolve(multipliedNumbers);
    });
}

function updateOutput(result) {
    const outputElement = document.getElementById('output');
    outputElement.textContent = `Final Result: ${result.join(', ')}`;
}

// Start the chain
getNumbers()
    .then(filterEvenNumbers)
    .then(multiplyByTwo)
    .then(updateOutput)
    .catch(error => console.error('Error:', error));
