document.getElementById('sortButton').addEventListener('click', function () {
    const input = document.getElementById('inputNumbers').value;
    const numbers = input.split(',').map(Number);
    
    if (numbers.some(isNaN)) {
        document.getElementById('result').textContent = "Please enter valid numbers.";
        return;
    }

    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length - i - 1; j++) {
            if (numbers[j] > numbers[j + 1]) {
                let temp = numbers[j];
                numbers[j] = numbers[j + 1];
                numbers[j + 1] = temp;
            }
        }
    }

    document.getElementById('result').textContent = "Sorted Numbers: " + numbers.join(', ');
});
