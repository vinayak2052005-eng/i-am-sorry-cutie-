let photoCount = 0;

function nextPage(pageNumber) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    // Show requested page
    document.getElementById('page' + pageNumber).classList.add('active');
    
    // Play music on first interaction
    let music = document.getElementById('bgMusic');
    music.play().catch(e => console.log("Music needs user interaction first"));
}

function revealText(element, word) {
    if (!element.classList.contains('revealed')) {
        element.style.opacity = "0.5";
        element.innerHTML = `<p style="font-weight:bold; color:#d63384; margin-top:50px;">${word}</p>`;
        element.classList.add('revealed');
        photoCount++;
        
        if (photoCount === 3) {
            document.getElementById('nextBtn').style.display = 'inline-block';
            document.getElementById('reveal-message').innerText = "Click the button below!";
        }
    }
}