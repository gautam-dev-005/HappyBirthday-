const enterButton = document.getElementById("enterButton");
const card = document.getElementById("card");
const container = document.getElementById("container");

enterButton.addEventListener("click", () => {
    // Trigger confetti and hide the button
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
    });
    enterButton.style.display = "none";

    // Add the falling animation to the container
    container.classList.add("falling");

    // After the fall animation ends, card will stay visible (no flipping yet)
    container.addEventListener("animationend", () => {
        card.style.opacity = "1";  // Make sure the card is visible after the fall
    }, { once: true });
});

// Card flip only when clicked
card.addEventListener("click", () => {
    card.classList.toggle("flipped");
});
