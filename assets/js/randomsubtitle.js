const subtitleCollection = {
   0: "...how else would you explain the app ignoring a11y settings?",
   1: "...because there isn't enough nightmare fuel on the Internet already.",
   2: "...as long as you don't compare it to any other site.",
   3: "...because Electron is the best software you can use, right?",
}

function setSubtitle() {
   const numSubtitles = Object.keys(subtitleCollection).length;
   const randomNum = Math.floor(Math.random() * numSubtitles);
   
   const subtitles = document.querySelectorAll('p[data-js="subtitle"]');
   subtitles.forEach((subtitle) => {
       subtitle.innerText = subtitleCollection[randomNum];
   });
}

function onload() {
    setSubtitle();
    
    document.removeEventListener('DOMContentLoaded', onload);
}

if(document.readyState != 'loading'){
    onload();
}else{
    document.addEventListener('DOMContentLoaded', onload);
}