// Dynamic Text in Home
const texts = [
    "Impacto",
    "Consciência",
    "Sustentabilidade"
];

let textIndex = 0;
let charIndex = 0;
const titleElement = document.getElementById("dynamic-title");
const typingSpeed = 150;
const delayBetweenTexts = 3000;

// Function to Write the Text
function typeText() {
    const currentText = texts[textIndex];

    // Updating Text with Character
    titleElement.textContent = currentText.substring(0, charIndex);

    // Rest of Characters to Write
    if (charIndex < currentText.length) {
        charIndex++;
        setTimeout(typeText, typingSpeed);
    } else {
        // Delay
        setTimeout(() => {
            charIndex = 0;
            textIndex = (textIndex + 1) % texts.length;  // Loop
            setTimeout(typeText, typingSpeed);
        }, delayBetweenTexts);
    }
}

typeText();