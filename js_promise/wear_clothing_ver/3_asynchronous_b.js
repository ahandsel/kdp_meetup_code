// Hands-on: Asynchronous Processing B

var human = ['naked'];
var delay = 1000;

function wearTSHIRT(color) {
  human.push(clothing);
  console.log('You got your ' + clothing + ' on!');
}

function wearUNDERWEAR(color) {
  setTimeout(function() {
    human.push(clothing);
    console.log('You got your ' + clothing + ' on!');
  }, delay);
}

function wearJEANS(color) {
    human.push(clothing);
    console.log('You got your ' + clothing + ' on!');
}

function check() {
  // Double check if you are wearing everything in order
  setTimeout(function() {
    if (human[2] == 'underwear' && human[3] == 'jeans') {
      console.log('You are looking sharp this morning!');
    } else if (human[2] == 'jeans' && human[3] == 'underwear') {
      console.log('Oh no! You are wearing underwear over your jeans!');
    } else {
      console.log('Something is not working here.');
    }
  }, delay);
}

Step_A('t-shirt');
Step_B('underwear');
Step_C('jeans');
check();