const subtitlesCollection = {
    0: "...how else would you explain the app ignoring a11y settings?",
    1: "...because there isn't enough nightmare fuel already.",
    2: "...as long as you don't compare it to any other site.",
    3: "...because Electron is the best software you can use, right?",
};

document$.subscribe(() => {
    const subListSize = Object.keys(subtitlesCollection).length;
    const randomNum = Math.floor(Math.random() * subListSize);
    
    const subtitles = document.querySelectorAll('h2[data-md-component="random-subtitle"]');
    subtitles.forEach((subtitle) => {
        console.log(subtitlesCollection);
        console.log(randomNum);
        console.log(subtitlesCollection[randomNum]);
        
        subtitle.innerText = subtitlesCollection[randomNum];
    })
})