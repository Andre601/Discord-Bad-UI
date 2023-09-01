const subtitlesCollection = {
    0: "...how else would you explain the app ignoring a11y settings?",
    1: "...because there isn't enough nightmare fuel already.",
    2: "...as long as you don't compare it to any other site.",
    3: "...because Electron is the best software you can use, right?",
}

function setSubtitle() {
    const numSubtitles = Object.keys(subtitlesCollection).length;
    const randomNum = Math.random(Math.random * numSubtitles);
    
    const subtitles = document.querySelectorAll('h2[data-js="subtitle"]');
    subtitles.forEach((subtitle) => {
        subtitle.innerText = subtitlesCollection[randomNum];
    });
}

function onLoad() {
    setSubtitle();
    
    document.removeEventListener('DOMContentLoaded', onload);
}

if(document.readyState != 'loading') {
    onLoad();
} else {
    document.addEventListener('DOMContentLoaded', onload);
}