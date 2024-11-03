
let randomNumber;
let output = document.getElementById("output");
let gameSection = document.getElementById("gameSection");
let rangeSection = document.getElementById("rangeSection");
let restartButton = document.getElementById("restartButton");

function setRange() {
    let range = parseInt(document.getElementById("rangeInput").value, 10);

    if (isNaN(range) || range < 1) {
        output.style.color = '#e74c3c';
        output.textContent = "Please enter a valid range!";
        return;
    }

    randomNumber = Math.floor(Math.random() * range) + 1;
    output.style.color = '#2ecc71';
    output.textContent = "Range set! Start guessing.";
    gameSection.style.display = 'block';
    rangeSection.style.display = 'none';
    restartButton.style.display = 'none';
}

function submitGuess() {
    let guess = parseInt(document.getElementById("guessInput").value, 10);

    if (isNaN(guess)) {
        output.style.color = '#e74c3c';
        output.textContent = "Please enter a valid number!";
        return;
    }

    if (guess === randomNumber) {
        output.style.color = '#2ecc71';
        output.textContent = "Congrats! Your guess is correct. The number is " + randomNumber + ".";
        restartButton.style.display = 'block';
        gameSection.style.display = 'none';
    } else if (guess > randomNumber) {
        output.style.color = '#e74c3c';
        output.textContent = "Your guess is too large! Please try again.";
    } else {
        output.style.color = '#e74c3c';
        output.textContent = "Your guess is too small! Please try again.";
    }

    document.getElementById("guessInput").value = ''; // Clear the input field
}

function quitGame() {
    output.style.color = '#e74c3c';
    output.textContent = "You have exited the game.";
    gameSection.style.display = 'none';
    restartButton.style.display = 'block';
}

function restartGame() {
    document.getElementById("rangeInput").value = '';
    rangeSection.style.display = 'block';
    gameSection.style.display = 'none';
    restartButton.style.display = 'none';
    output.textContent = '';
}