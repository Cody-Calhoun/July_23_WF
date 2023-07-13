console.log("Running main.js")
console.log(document)
// Option One
// let number = document.getElementsByClassName("countingNum")[0]

// Option Two
let number = document.querySelector(".countingNum")

function alertMe(element) {
    console.log(element.innerText)
}

function increaseNum(num){
    console.log(num)
    console.log(num.innerText)
    // console.log(typeof(num.innerText))
    num.innerText = parseInt(num.innerText) + 1
}

function increaseNum2(){
    number.innerText = parseInt(number.innerText) + 1
}
