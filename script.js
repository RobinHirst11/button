let startTime = Date.now();
const counterDisplay = document.getElementById('counter');
const theButton = document.getElementById('the-button');

updateCounter();

setInterval(updateCounter, 1000);

theButton.addEventListener('click', () => {
    startTime = Date.now();
    updateCounter();
});

function updateCounter() {
    const elapsedTime = Date.now() - startTime;
    counterDisplay.textContent = formatTime(elapsedTime);
}

function formatTime(milliseconds) {
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const years = Math.floor(days / 365);

    let formattedTime = "";

    if (years > 0) {
        formattedTime += years + " year" + (years > 1 ? "s" : "") + ", ";
    }
    if (weeks > 0 && years < 1) {
        formattedTime += (weeks % 52) + " week" + ((weeks % 52) > 1 ? "s" : "") + ", ";
    }
    if (days > 0 && weeks < 1) {
        formattedTime += (days % 7) + " day" + ((days % 7) > 1 ? "s" : "") + ", ";
    }
    if (hours > 0 && days < 1) {
        formattedTime += (hours % 24) + " hour" + ((hours % 24) > 1 ? "s" : "") + ", ";
    }
    if (minutes > 0 && hours < 1) {
        formattedTime += (minutes % 60) + " minute" + ((minutes % 60) > 1 ? "s" : "") + ", ";
    }
    formattedTime += (seconds % 60) + " second" + ((seconds % 60) > 1 ? "s" : "");

    return formattedTime;
}

const BUBBLE_SIZE = 120;
        const BUBBLE_FADE_OUT_TIME = 2000;
        const MIN_MOVEMENT_SPEED = 0.16;
        const MAX_MOVEMENT_SPEED = 0.3;
        const BUBBLE_CREATION_INTERVAL = 1000;

        const directions = [
            { x: -1, y: -1 },
            { x: -1, y: 1 },
            { x: 1, y: -1 },
            { x: 1, y: 1 },
            { x: 0, y: -1 },
            { x: 0, y: 1 },
            { x: -1, y: 0 },
            { x: 1, y: 0 },
        ];

        setInterval(function () {
            const newBubble = document.createElement('div');
            newBubble.classList.add('bubbles');
            document.body.appendChild(newBubble);

            let top = Math.floor(Math.random() * window.innerHeight + 1);
            let left = Math.floor(Math.random() * window.innerWidth + 1);
            newBubble.style.top = `${top}px`;
            newBubble.style.left = `${left}px`;

            const direction = directions[Math.floor(Math.random() * directions.length)];
            const speed = MIN_MOVEMENT_SPEED + Math.random() * (MAX_MOVEMENT_SPEED - MIN_MOVEMENT_SPEED);

            setTimeout(() => {
                newBubble.style.opacity = '0.5';
            }, 50);

            const mytime = setInterval(() => {
                top += direction.y * speed;
                left += direction.x * speed;

                newBubble.style.top = `${top}px`;
                newBubble.style.left = `${left}px`;

            }, 1000 / 180);

            const bubbleLifespan = Math.floor(Math.random() * 3000) + 2000;

            setTimeout(() => {
                newBubble.classList.add('bubble-hide');
                setTimeout(() => {
                    newBubble.remove();
                    clearInterval(mytime);
                }, BUBBLE_FADE_OUT_TIME);
            }, bubbleLifespan);

        }, BUBBLE_CREATION_INTERVAL);
