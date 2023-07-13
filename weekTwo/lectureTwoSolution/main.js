console.log("Running main.js")

let elementYear = document.getElementsByClassName("year")[0];
// via querySelector
// let elementYear = document.querySelector(".year");
console.log(elementYear);

function changeButtonText(element){
    // console.log(element);
    console.log(element.innerText);
    element.innerText = "Changed";
}

// Do this function inside of bottom button BEFORE using query selector or getElements by class name
function increaseNum(element){
    console.log(typeof element.innerText);
    let num = parseInt(element.innerText);
    element.innerText = num + 1;
}


function increaseYear(){
    let year = parseInt(elementYear.innerText);
    elementYear.innerText = year + 1;
}


// What is the DOM or Document Object Model?
// - The DOM is a representation of the HTML elements on a webpage
// - The DOM is a tree-like structure
// - The DOM is a JavaScript object

