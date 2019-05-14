window.addEventListener('load', () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors = [
        "#60d394",
        "#d36060",
        "#c060d3",
        "#d3d160",
        "#6860d3",
        "#60b2d3"
    ];

    pads.forEach((pad, index) => {
        pad.addEventListener('click', function() {
            sounds[index].currentTime = 0;
            sounds[index].play();

            createBubbles(index);
        });
    });

    const createBubbles = (index) => {
        const bubbles = document.createElement("div");
        visual.appendChild(bubbles);
        bubbles.style.backgroundColor = colors[index];
        bubbles.style.animation = 'jump 1s ease';
        bubbles.addEventListener('animationend', function() {
            visual.removeChild(this);
        });
    }
});