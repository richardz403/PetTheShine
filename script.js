let counter = 0;
let doubleClickActive = false; // Flag for double clicks
let workers = [];
let goldenCookieTimeout;
let doubleClickTimeout;

const counterDisplay = document.getElementById('counter');
const cookie = document.getElementById('cookie');
const buyWorkerButton = document.getElementById('buyWorkerButton');
const body = document.body;
const workersDisplay = document.getElementById('workers');

// Array of cursor images
const cursorImages = [
    'frame_0_delay-0.07s.gif', 
    'frame_1_delay-0.07s.gif',
    'frame_2_delay-0.07s.gif',
    'frame_3_delay-0.07s.gif',
    'frame_4_delay-0.07s.gif' // Add more cursor images as needed
];

let currentCursorIndex = 0;

// Click event for the cookie image
cookie.addEventListener('click', () => {
    let clicks = doubleClickActive ? 2 : 1; // Double clicks if active
    counter += clicks;
    counterDisplay.textContent = counter;

    cookie.classList.add('vibrate');
    setTimeout(() => {
        cookie.classList.remove('vibrate');
    }, 300);

    createFallingCookie();
});

// Function to create a falling cookie
function createFallingCookie() {
    const fallingCookie = document.createElement('img');
    fallingCookie.src = 'unshine.jpg';
    fallingCookie.classList.add('falling-cookie');
    
    const randomX = Math.random() * window.innerWidth;
    fallingCookie.style.left = `${randomX}px`;
    
    body.appendChild(fallingCookie);
    
    const fallDuration = Math.random() * 3 + 3;
    fallingCookie.style.animationDuration = `${fallDuration}s`;
    
    setTimeout(() => {
        fallingCookie.remove();
    }, fallDuration * 1000);
}

// Function to alternate the cursor
setInterval(() => {
    currentCursorIndex = (currentCursorIndex + 1) % cursorImages.length;
    cookie.style.cursor = `url(${cursorImages[currentCursorIndex]}), auto`;
}, 50);

// Click event for buying a worker
buyWorkerButton.addEventListener('click', () => {
    if (counter >= 10) {
        counter -= 10;
        counterDisplay.textContent = counter;

        const worker = document.createElement('img');
        worker.classList.add('worker');
        worker.style.width = '100px';
        worker.src = 'bhargav.webp';
        document.getElementById("workers").appendChild(worker);

        workers.push(worker);

        setInterval(() => {
            let workerClicks = doubleClickActive ? workers.length * 2 : workers.length;
            counter += workerClicks;
            counterDisplay.textContent = counter;
        }, 1000);
    }
});

// Function to create the golden cookie
function createGoldenCookie() {
    const goldenCookie = document.createElement('img');
    goldenCookie.src = 'shine.webp'; // Replace with your golden image

    goldenCookie.width = '100px';
    goldenCookie.classList.add('golden-cookie');

    const randomX = Math.random() * window.innerWidth;
    const randomY = Math.random() * window.innerHeight;
    goldenCookie.style.left = `${randomX}px`;
    goldenCookie.style.top = `${randomY}px`;

    body.appendChild(goldenCookie);

    // Click event for the golden cookie
    goldenCookie.addEventListener('click', () => {
        goldenCookie.remove();
        activateDoubleClicks();
    });

    // Remove the golden cookie after 10 seconds
    setTimeout(() => {
        goldenCookie.remove();
    }, 10000);
}

// Function to activate double clicks
function activateDoubleClicks() {
    doubleClickActive = true;
    body.style.backgroundColor = 'yellow'; // Glow effect

    clearTimeout(doubleClickTimeout); // Clear any existing timeouts
    doubleClickTimeout = setTimeout(() => {
        doubleClickActive = false;
        body.style.backgroundColor = ''; // Reset background color
    }, 10000); // Double clicks for 10 seconds
}

// Spawn the golden cookie every 15 seconds
setInterval(() => {
    createGoldenCookie();
}, 15000);
