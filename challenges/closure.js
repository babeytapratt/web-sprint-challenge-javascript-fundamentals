// ==== Closures ====

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation:
// Because nested function is within the closure of myFunction. It can access everything that myFunction can access. It is a child function of myFunction, the parent function.

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

let counter = 0;

function summation(number) {
  counter += number - 3 + number -2 + number - 1 + number;
  return counter;
}

console.log(summation(4));
