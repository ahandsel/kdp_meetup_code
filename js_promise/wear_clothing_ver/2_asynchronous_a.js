// Hands-on: Asynchronous Processing A
// Good morning, time for you to get dressed!

function Step_A(clothing) {
  console.log(clothing);
}

function Step_B(clothing) {
  setTimeout(function() {
    console.log(clothing);
  }, 1000);
}

function Step_C(clothing) {
  console.log(clothing);
}

Step_A('t-shirt');
Step_B('underwear');
Step_C('jeans');

/* Expected Results
t-shirt
jeans
...
underwear
*/