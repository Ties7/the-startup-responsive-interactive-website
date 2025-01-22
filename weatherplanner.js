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

// dialog
const swimmingbtn = document.querySelector('.swimmingbtn');
const swimmingdialog = document.querySelector('.swimming');
const exitbtn = document.querySelector('.exitbtn')

swimmingbtn.addEventListener('click', opendialog)
exitbtn.addEventListener('click', closedialog)

function opendialog() {
    swimmingdialog.showModal();
}

function closedialog() {
    swimmingdialog.close();
}

console.log(swimmingbtn, swimmingdialog, exitbtn);

// showmore / showless button
const showmore = document.querySelector('.showmore')
const showmore2 = document.querySelector('.showmore2')
const actbtn = document.querySelectorAll('.first')
const actbtn2 = document.querySelectorAll('.second')
let isExpanded = false;

console.log(showmore);
console.log(actbtn)

showmore.addEventListener('click', showit)

function showit() {
    if (isExpanded) {
        // Hide the 2nd and 3rd buttons when collapsing
        actbtn.forEach((btn, index) => {
            if (index > 0) {
                btn.classList.add('hidden');
            }
        });
    } else {
        // Show all buttons when expanding
        actbtn.forEach((btn) => {
            btn.classList.remove('hidden');
        });
    }

    // Toggle the button text
    isExpanded = !isExpanded; // Switch the state
    showmore.textContent = isExpanded ? 'Show less' : 'Show more';
}

showmore2.addEventListener('click', showit2)

function showit2() {
    if (isExpanded) {
        // Hide the 2nd and 3rd buttons when collapsing
        actbtn2.forEach((btn, index) => {
            if (index > 0) {
                btn.classList.add('hidden');
            }
        });
    } else {
        // Show all buttons when expanding
        actbtn2.forEach((btn) => {
            btn.classList.remove('hidden');
        });
    }

    // Toggle the button text
    isExpanded = !isExpanded; // Switch the state
    showmore2.textContent = isExpanded ? 'Show less' : 'Show more';
}