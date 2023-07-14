console.log('running main.js')

// Pop up discount code after 10 seconds

    // 1 Named function
// function discountCode(){
//     alert("Save 20% with code Hero20")
// }
// setTimeout(discountCode, 10000)

    // 2 Anonymous function
// setTimeout(function(){
//     alert("Save 20% with code Hero20")
// }, 10000)

    // 3 Aarow function
// setTimeout(() => {
//     alert("Save 20% with code Hero20")
// }, 10000)

// When a user clicks an alert with what was in search bar is displayed

let form = document.querySelector('form')
let searchInput = document.querySelector('input')
// console.log(searchInput)

// Option 1
function searchAlert(){
    alert(searchInput.value)
}

form.addEventListener('submit', function(){
    alert(searchInput.value)
})

// Option 2
// function searchAlert(){
//     alert(searchInput.value)
// }

// form.addEventListener('submit', searchAlert)


// Increase the cart count when a user clicks add to cart

function increaseCart(){
    let cartCount = document.querySelector('.cart-total')
    cartCount.innerText = parseInt(cartCount.innerText) + 1
}
