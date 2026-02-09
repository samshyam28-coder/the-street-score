function showFootballMenu() {
    const cricketSide = document.getElementById('cricketSide');
    const footballSide = document.getElementById('footballSide');
    const footballOptions = document.getElementById('footballOptions');
    const footballLabel = document.querySelector('.football .sport-label');

    // 1. Completely hide cricket and expand football
    cricketSide.classList.add('hide-cricket');
    footballSide.classList.add('expand-football');
    
    // 2. Move label and show cards
    footballOptions.classList.add('show-options');
    footballLabel.classList.add('move-up');

    // 3. Disable the background click so user can click the cards
    footballSide.style.pointerEvents = "none"; 
}