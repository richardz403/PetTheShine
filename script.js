let counter = 0;
const counterDisplay = document.getElementById('counter');
const cookie = document.getElementById('cookie');
const buyWorkerButton = document.getElementById('buyWorkerButton');
const body = document.body;

let workers = []; // Array to hold the workers

// Click event for the cookie image
cookie.addEventListener('click', () => {
    // Increase counter
    counter++;
    counterDisplay.textContent = counter;

    // Add vibrate effect
    cookie.classList.add('vibrate');

    // Remove vibrate class after animation
    setTimeout(() => {
        cookie.classList.remove('vibrate');
    }, 300);

    // Create a falling cookie
    createFallingCookie();
});

// Function to create a falling cookie
function createFallingCookie() {
    const fallingCookie = document.createElement('img');
    fallingCookie.src = 'unshine.jpg'; // Same image
    fallingCookie.classList.add('falling-cookie');
    
    const randomX = Math.random() * window.innerWidth;
    fallingCookie.style.left = `${randomX}px`;
    
    body.appendChild(fallingCookie);
    
    const fallDuration = Math.random() * 3 + 3; // 3 to 6 seconds
    fallingCookie.style.animationDuration = `${fallDuration}s`;
    
    setTimeout(() => {
        fallingCookie.remove();
    }, fallDuration * 1000);
}

// Click event for buying a worker
buyWorkerButton.addEventListener('click', () => {
    if (counter >= 10) {
        counter -= 10; // Deduct 50 clicks
        counterDisplay.textContent = counter;

        // Create a worker element
        const worker = document.createElement('img');
        worker.classList.add('worker');
        worker.style.width = '100px';
        worker.src = 'bhargav.webp'; // You can change this to any character or image
        document.getElementById("workers").appendChild(worker);

        // Add the worker to the array
        workers.push(worker);

        // Generate clicks every second for the new worker
        setInterval(() => {
            counter++;
            counterDisplay.textContent = counter;

            worker.classList.add('vibrate');

            // Remove vibrate class after animation
            setTimeout(() => {
                worker.classList.remove('vibrate');
            }, 300);

            cookie.classList.add('vibrate');

            // Remove vibrate class after animation
            setTimeout(() => {
                cookie.classList.remove('vibrate');
            }, 300);

            // Create a falling cookie
            createFallingCookie();
        }, 1000);
    }
});
