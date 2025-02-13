let passcodeInput = document.getElementById("passcode");
let messageBox = document.querySelector(".message-box .content");
let attemptCount = 0;
//const correctPasscode = "08192024"; // August 19, 2024
const correctPasscode = "1";
let okButton = document.getElementById("okbtn");



function enterDigit(digit) {
    if (passcodeInput.value.length < 8) {
        passcodeInput.value += digit;
    }
}

function clearDisplay() {
    passcodeInput.value = "";
    okButton.style.backgroundColor = ""; // Reset button color
    
    passcodeInput.style.border = ""; // Reset border color
}

function unlockVault() {
    if (passcodeInput.value === correctPasscode) {
        messageBox.innerHTML = "<h2>Vault Unlocked!</h2><p>Happy Valentine's Day, my love! ❤️</p>";
        passcodeInput.value = "";
        passcodeInput.style.border = "2px solid green"; // Change border to blue on success
        setTimeout(() => {
            window.location.href = "./Message/message.html  "; // Redirect to the next page
        }, 1000); // Delay for better UX
    } else {
        attemptCount++;
        handleWrongAttempt();
    }
}

function handleWrongAttempt() {
    okButton.classList.add("wrong-attempt"); // Add class to trigger ::after effect
    passcodeInput.style.border = "2px solid red"; // Change border to red on wrong attempt
    
    setTimeout(() => {
        okButton.classList.remove("wrong-attempt"); // Remove class after delay
        passcodeInput.style.border = ""; // Reset border after delay
        clearButton.style.backgroundColor = "";
    }, 500);

    passcodeInput.value = "";
    if (attemptCount === 2) {
        messageBox.innerHTML = "<h2>HINT!</h2><p>Our Special day</p> <br><h2>Are you really love me 😢</h2>";
    } else if (attemptCount > 3) {
        passcodeInput.placeholder = "Are you really love me? 😢";
    }
    passcodeInput.value = ""; // Clear input after each incorrect attempt
}