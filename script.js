// Function to switch pages
function goToPage(pageId) {
    // 1. Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // 2. Show the specific page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }

    // 3. MUSIC CONTROL LOGIC
    const audio = document.getElementById("bg-music");

    if (pageId === 'day7-final') {
        // If we reach the final page, play the song
        playMusic();
    } else if (pageId === 'menu' || pageId === 'intro') {
        // If she goes back to Menu or Restart, stop and reset the song
        stopMusic();
    }
}

function handleYesClick() {
    goToPage('goodgirl');
    setTimeout(() => {
        goToPage('loading');
        startLoadingBar();
    }, 2000);
}

function handleNoClick() {
    goToPage('angry');
}

function startLoadingBar() {
    const bar = document.getElementById('p-bar');
    bar.style.width = '0%';
    setTimeout(() => {
        bar.style.width = '100%';
    }, 100);
    setTimeout(() => {
        goToPage('menu');
    }, 3000);
}

// Function to start the music
function playMusic() {
    const audio = document.getElementById("bg-music");
    if (audio.paused) {
        audio.play().catch(error => {
            console.log("Music blocked by browser. Interaction required.");
        });
    }
}

// Function to stop and reset the music
function stopMusic() {
    const audio = document.getElementById("bg-music");
    audio.pause();
    audio.currentTime = 0; // This resets the song to the very start
}

// Popup Logic
function showPopup() {
    document.getElementById('custom-popup').classList.add('active');
}

function closePopup() {
    document.getElementById('custom-popup').classList.remove('active');
    goToPage('menu');
}