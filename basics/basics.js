const button = document.querySelector('button') // sla het button element (object) op in een variable (binding)

button.addEventListener('click', moveParagraph) // javascript werkt met dot-notation, buttonPressed is een callback function

function moveParagraph () {
    // select paragraph
    const p = document.querySelector('p')

    // add class to paragraph
    p.classList.toggle('moveit')

    // change custom property setting the opacity
    p.style.setProperty('--opacity', 1)

}

// conventions
// use a named callback function instead of a ananymous function
// use meaningfull names for variables and functions
// never set styling directly from javascript, pass values through a custom property
// always use a button to trigger an action
// follow the same order in javascript as in html