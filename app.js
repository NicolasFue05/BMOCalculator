console.log("JavaScript loaded");

const display = document.querySelector('input');

// Function that adds the numbers to the display container
function displayNumbers(num) {
    if (display.value == "0" || display.value == "Error") {
        display.value = ""; // Use display.value directly to clear the screen
    }
    display.value += num;
}

// Function to clear the display
function clearDisplay() {
    display.value = "0"; // Reset to 0 instead of empty
}

// Function to perform calculation
function calculate() {
    try {
        display.value = eval(display.value.replace(/x/g, '*').replace(/÷/g, '/'));
    } catch (err) {
        display.value = "Error";
    }
}
