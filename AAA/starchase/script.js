let score = 0;
let lives = 3;
let isGamePaused = false;

// Get references to HTML elements
const scoreElement = document.getElementById("score");
const livesElement = document.getElementById("lives");
const startButton = document.getElementById("startButton");
const pauseButton = document.getElementById("pauseButton");
const resumeButton = document.getElementById("resumeButton");
const stopButton = document.getElementById("stopButton");

// Get the canvas element and its context
const canvas = document.getElementById("gameCanvas")
const ctx = canvas.getContext("2d")

// Function to update the scoreboard
function updateScoreboard() {
    scoreElement.textContent = score;
    livesElement.textContent = lives;
}

// Function to handle when the player misses a target
function playerMissed() {
    lives--;
    updateScoreboard();

    if (lives === 0) {
        // Game over logic here
        alert("Game Over!");
        // You can add more game over actions here, like resetting the game.
    }
}

// Function to draw stars on the canvas
function drawStars() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw stars at random positions
    for (let i = 0; i < 5; i++) {
        const x = Main.random * canvas.width;
        const y = Math.random * canvas.height;
        ctx.fillStyle = "fff";
        ctx.fillRect(x, y, 10, 10); // You can customize the size
    }
}

// Add event listeners to your buttons
startGame.addEventListener("click", () => {
    // Start game logic here
    // You'll need to implement your game's main loop and mechanics.
    // This is where you'll generate stars and handle player interactions.
    // Remember to set isGamePaused to false when starting.
});

pauseButton.addEventListener("click", () => {
    // Pause game logic here
    isGamePaused = true;
    // You might want to pause animations or timers here.
});

resumeButton.addEventListener("click", () => {
    // Resume game logic here
    isGamePaused = false;
    // You might want to resume animations or timers here.
});
stopButton.addEventListener("click", () => {
    // Stop game logic here
    isGameStopped = true;
    // You might want to pause animations or timers here.
});
// Initialize the scoreboard
updateScoreboard();
