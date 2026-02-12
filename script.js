const words = ["WordPress.", "WooCommerce.", "HTML5, CSS3 y JavaScript.", "Soluciones Eficientes."];
let i = 0;
let timer;

function typeWriter() {
    const textElement = document.getElementById("typing-text");
    const word = words[i];
    // CAMBIO 1: Usamos textContent en lugar de innerHTML
    const currentText = textElement.textContent;

    if (currentText.length < word.length) {
        // CAMBIO 2: Usamos textContent
        textElement.textContent += word.charAt(currentText.length);
        timer = setTimeout(typeWriter, 100);
    } else {
        setTimeout(eraseText, 2000);
    }
}

function eraseText() {
    const textElement = document.getElementById("typing-text");
    // CAMBIO 3: Usamos textContent
    const currentText = textElement.textContent;

    if (currentText.length > 0) {
        // CAMBIO 4: Usamos textContent
        textElement.textContent = currentText.substring(0, currentText.length - 1);
        timer = setTimeout(eraseText, 50);
    } else {
        i = (i + 1) % words.length;
        setTimeout(typeWriter, 500);
    }
}

// Juntamos todo lo que debe pasar al iniciar la web
window.onload = function() {
    // 1. Iniciar la máquina de escribir
    typeWriter();

    // 2. Poner el año automáticamente en el copy
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
};