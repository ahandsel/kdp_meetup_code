// Hands-on: Asynchronous Processing B

var human = ['naked'];
var delay = 1000;

function Step_A(clothing) {
  human.push(clothing);
  console.log('You got your ' + clothing + ' on!');
}

function Step_B(clothing) {
  setTimeout(function() {
    human.push(clothing);
    console.log('You got your ' + clothing + ' on!');
  }, delay);
}

function Step_C(clothing) {
    human.push(clothing);
    console.log('You got your ' + clothing + ' on!');
}

function check() {
  // Double check if you are wearing everything in order
  setTimeout(function() {
    if (human[2] == 'underwear' && human[3] == 'pants') {
      console.log('You are looking sharp this morning!');
    } else if (human[2] == 'pants' && human[3] == 'underwear') {
      console.log('Oh no! You are wearing underwear over your pants!');
    } else {
      console.log('Something is not working here.');
    }
  }, delay);
}

Step_A('t-shirt');
Step_B('underwear');
Step_C('pants');
check();

