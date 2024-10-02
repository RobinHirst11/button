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

setInterval(function () {
    const newBubble = document.createElement('div');
    newBubble.classList.add('bubbles');
    document.body.appendChild(newBubble);

    let top = Math.random() * 100;
    let left = Math.random() * 100;

    newBubble.style.top = top + "%";
    newBubble.style.left = left + "%";
    newBubble.style.opacity = 0;

    const myDirection = Math.floor(Math.random() * 4) + 1;

    let fadeInInterval = setInterval(() => {
        let opacity = parseFloat(newBubble.style.opacity);
        if (opacity >= 0.5) {
            clearInterval(fadeInInterval);
        } else {
            newBubble.style.opacity = (opacity + 0.01).toString();
        }
    }, 20);

    const speed = 0.16;
    let mytime = setInterval(function () {
        if (myDirection === 1) {
            top -= speed;
        } else if (myDirection === 2) {
            top -= speed;
            left += speed;
        } else if (myDirection === 3) {
            top += speed;
            left -= speed;
        } else if (myDirection === 4) {
            top += speed;
            left += speed;
        }

        newBubble.style.top = top + "%";
        newBubble.style.left = left + "%";

    }, 1000 / 60);

    let fadeOutTimeout;
    let isFadingOut = false;

    function fadeOutAndRemove() {
        let fadeOutInterval = setInterval(() => {
            let opacity = parseFloat(newBubble.style.opacity);
            if (opacity <= 0) {
                clearInterval(fadeOutInterval);
                newBubble.remove();
            } else {
                newBubble.style.opacity = (opacity - 0.01).toString();
            }
        }, 20);
    }

    fadeOutTimeout = setTimeout(() => {
        if (!isFadingOut) {
            isFadingOut = true;
            fadeOutAndRemove();
        }
    }, Math.floor(Math.random() * 1000) + 2000);
}, 1000);
