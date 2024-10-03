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
    const colorInputBubble = document.getElementById('color-input-bubble');

    const hexColor = colorInputBubble.value;
    document.body.appendChild(newBubble);
    newBubble.style.backgroundColor = hexColor;
    newBubble.style.top = Math.floor(Math.random() * window.innerHeight + 1) + 'px';
    newBubble.style.left = Math.floor(Math.random() * window.innerWidth + 1) + 'px';

    const myDirection = Math.floor(Math.random() * 5);
    setTimeout(function () {
        newBubble.style.opacity = '0.5';
    }, 1);

    const speed = 0.16;
    let mytime = setInterval(function () {
        if (myDirection === 1) {
            newBubble.style.top = (parseInt(newBubble.style.top) - speed) + 'px';
            newBubble.style.left = (parseInt(newBubble.style.left) - speed) + 'px';
        } else if (myDirection === 2) {
            newBubble.style.top = (parseInt(newBubble.style.top) - speed) + 'px';
            newBubble.style.right = (parseInt(newBubble.style.right) - speed) + 'px';
        } else if (myDirection === 3) {
            newBubble.style.top = (parseInt(newBubble.style.top) + speed) + 'px';
            newBubble.style.left = (parseInt(newBubble.style.left) + speed) + 'px';
        } else {
            newBubble.style.top = (parseInt(newBubble.style.top) + speed) + 'px';
            newBubble.style.right = (parseInt(newBubble.style.right) + speed) + 'px';
        }
        if (newBubble.style.top <= 0) return clearInterval(mytime);
        if (newBubble.style.left <= 0) return clearInterval(mytime);
        if (newBubble.style.right >= window.innerWidth) return clearInterval(mytime);
        if (newBubble.style.bottom >= window.innerWidth) return clearInterval(mytime);
    }, 1000 / 60);

    setTimeout(function () {
        newBubble.classList.add('bubble-hide');
        setTimeout(function () {
            newBubble.remove();
        }, 2000);
    }, Math.floor(Math.random() * 1000) + 2000);
}, 1000);
