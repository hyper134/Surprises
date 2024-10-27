// Button to reveal the birthday surprise
const revealButton = document.getElementById('revealButton');
const birthdaySurprise = document.getElementById('birthdaySurprise');
const stopConfettiButton = document.getElementById('stopConfetti');
let confettiInterval;

// Function to reveal the surprise section
revealButton.addEventListener('click', () => {
    document.querySelector('.landing-page').style.display = 'none';
    birthdaySurprise.style.display = 'block';
    startConfetti();
});

// Function to start confetti
function startConfetti() {
    confettiInterval = setInterval(() => {
        createConfetti();
    }, 300);
}

// Function to create confetti elements
function createConfetti() {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
    confetti.innerHTML = '🎉';
    document.getElementById('confetti').appendChild(confetti);

    // Remove confetti after animation
    setTimeout(() => {
        confetti.remove();
    }, 5000);
}

// Stop confetti on button click
stopConfettiButton.addEventListener('click', () => {
    clearInterval(confettiInterval);
});
