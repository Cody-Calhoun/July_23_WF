// Write code that will go through each number from 1 to 100 and:

// For each number that is a multiple of 3, print "Fizz"
// For each number that is a multiple of 5, print "Buzz"
// For numbers which are a multiple of both 3 and 5, print "FizzBuzz"
// All other numbers should just print normally

// Pseudo Code
// Pseudo Definition - Write out the steps of your algorithm in plain english

// Write a for loop that starts at 1; ends at 101; step = 1
for (let i = 1; i <101; i++){
    if (i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz")
    }
    else if (i%3 == 0){
        console.log("Fizz")
    }
    else if (i%5 == 0){
        console.log("Buzz")
    }
    else{
        console.log(i)
    }
}
//console.log(number)
// use if statement to see if divisible by 3
// if true console.log("fizz")
// use if statement to see if divisible by 5
// else if true console.log("buzz")
// use if statement to see if divisible by 3 AND 5
// else if true console.log("Fizz Buzz")
// else console.log(number)