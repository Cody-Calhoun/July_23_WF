// Global vs Local Scope

// Global Scope: Variables defined outside any function, block, or module have a global scope. They can be accessed from any part of the code.

// Local Scope: Variables defined inside a function or a block have a local scope. They can only be accessed within the function or the block they were declared.

// Global scope
var first_name = "I'm global!";

// function checkScope() {
//   // Local scope
//   var localVar = "I'm local!";
//   console.log(globalVar); // Output: "I'm global!"
//   console.log(localVar); // Output: "I'm local!"
// }

// checkScope();
// console.log(globalVar); // Output: "I'm global!"
// console.log(localVar); // ReferenceError: localVar is not defined

// Var, Let, Const

// function checkScope() {
//     // Local scope
//     var localVar = "I'm local!";
//     console.log(globalVar); // Output: "I'm global!"
//     console.log(localVar); // Output: "I'm local!"
//   }

//   console.log(localVar)

function testVar() {
    var x = 1;
    
    if(true) {
      var x = 2;  // Same variable!
      console.log(x); // Output: 2
    }
  
    console.log(x); // Output: 2
  }

  console.log(x)
  
  testVar();

// Global scope
// let y = "global";
// const z = "also global";

// function blockScope() {
//   let y = "local";
//   const z = "also local";
//   console.log(y); // Output: "local"
//   console.log(z); // Output: "also local"
// }

// blockScope();
// console.log(y); // Output: "global"
// console.log(z); // Output: "also global"

function testLetConst() {
    let x = 1;
    const y = 1;
    
    if(true) {
      let x = 2;  // Different variable!
      const y = 2; // Different variable!
      console.log(x); // Output: 2
      console.log(y); // Output: 2
    }
  
    console.log(x); // Output: 1
    console.log(y); // Output: 1
  }
  
  testLetConst();





