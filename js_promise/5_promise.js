// Hands-on: Promises
// Successes by default
// To fail & have the promise reject, change line 45 & 48

var human = ['naked'];
var delay = 1000;

function Step_A(clothing) {
  return new Promise(function (resolve, reject) {
    human.push(clothing);
    if (human.length == 2) {
      resolve('Step A finished. You got your ' + clothing + ' on!');
    } else {
      reject('You got the order wrong');
    }
  });
}

function Step_B(clothing) {
  return new Promise(function (resolve, reject) {
    setTimeout(function() {
      human.push(clothing);
      if (human[2] != 'pants') {
        resolve('Step B finished. You got your ' + clothing + ' on!');
      } else {
        reject('You got the order wrong!');
      }
    }, delay);
  });
}

function Step_C(clothing) {
  return new Promise(function (resolve, reject) {
    human.push(clothing);
    if (human.length == 4 && human[3] == 'pants') {
      resolve('Step C finished. You got your ' + clothing + ' on!\nYou are looking sharp this morning!');
    } else {
      reject('Oh no! You are wearing underwear over your pants!');
    }
  });
}

Step_A('t-shirt').then(function (resultA) {
  console.log(resultA);
  return Step_B('underwear');  // change to 'pants' to fail
}).then(function (resultB) {
  console.log(resultB);
  return Step_C('pants');  // change to 'underwear' to fail
}).then(function (resultC) {
  console.log(resultC);
}).catch(function (error) {
  console.log(error);
});