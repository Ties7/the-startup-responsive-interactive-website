const readmorebtn = document.querySelector('.read-more');
const readlessbtn = document.querySelector('.read-less'); //selecteerd de 2de button
const readmoretext = document.querySelector('#showmore');

readmorebtn.addEventListener('click', showtext) //maakt functie showtext aan
readlessbtn.addEventListener('click', hidetext) //maakt functie hidetext aan

function showtext() {
    readmoretext.classList.remove('hide'); //zorgt dat de tekst zichtbaar is
    readmorebtn.classList.add('hide'); //zorgt dat de readmore button onzichtbaar is
    readlessbtn.classList.remove('hide'); //zorgt dat de readless button zichtbaar is
}

function hidetext() {
    readmoretext.classList.add('hide'); //zorgt dat de text onzichtbaar is
    readmorebtn.classList.remove('hide'); //zorgt dat de readmore button zichtbaar is
    readlessbtn.classList.add('hide'); //zorgt dat de readless button onzichtbaar is
}