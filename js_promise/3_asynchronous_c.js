var human = ['naked'];

function Step_A(clothing) {
  human.push(clothing);
  console.log('You got your ' + clothing + ' on!');
}

function Step_B(clothing, delay) {
  human.push(clothing);
  console.log('You got your ' + clothing + ' on!');
}

function Step_C(clothing) {
  human.push(clothing);
  console.log('You got your ' + clothing + ' on!');
}

function check() {
  if (human[2] == 'underwear' && human[3] == 'pants') {
    console.log('You are looking sharp this morning!');
  }
  else if (human[2] == 'pants' && human[3] == 'pants') {
  console.log('Oh no! You are wearing underwear over your pants!');
} else {
  console.log('Something is not working here.');
  console.log('human = ' + human);
  }
}

Step_A('t-shirt');
Step_B('underwear');
Step_C('pants');
check();