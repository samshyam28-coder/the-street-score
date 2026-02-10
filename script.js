window.onload = () => {
    const header = document.getElementById('main-header');
    const gate = document.getElementById('split-gate');

    // 1. Initial State: Only Glow Title is shown in center.
    // 2. Delay, then Glide Title to Top.
    setTimeout(() => {
        header.classList.add('at-top');
    }, 2000);

    // 3. Fade in the Universes only after title moves.
    setTimeout(() => {
        gate.style.opacity = "1";
    }, 2800);
};

function expandUniverse(sport) {
    const fb = document.getElementById('side-fb');
    const cr = document.getElementById('side-cr');
    const sub = document.getElementById('sport-subtitle');
    const labels = document.querySelectorAll('.center-label');

    // Hide labels immediately
    labels.forEach(l => l.style.opacity = '0');

    // 4. The Zip-Slide & Full-Screen Expansion
    if (sport === 'football') {
    cr.classList.add('zip-out-right');
    fb.classList.add('expanded'); // <--- ADD THIS LINE
    sub.style.color = "#2ecc71";
} else {
    fb.classList.add('zip-out-left');
    cr.classList.add('expanded'); // <--- ADD THIS LINE
    sub.style.color = "#f1c40f";
}

    // 5. Reveal Sport Sub-title and Dashboard in center
    setTimeout(() => {
        sub.innerText = sport.toUpperCase();
        sub.style.opacity = "1";
        document.getElementById(`nav-${sport}`).style.display = "flex";
    }, 700);
}

function resetHome() {
    // Reset back to center title and blackout start
    window.location.reload();
}
