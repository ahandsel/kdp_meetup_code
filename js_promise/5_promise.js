// 5_promise.js
// Hands-on: Promises
// Let's fix the asynchronous problem by Promise objects!

var human = ['Naked'];

function wearShirt(color) {
  return new Promise(function (resolve, reject) {
    human.push('T-Shirt');
    if (human.length == 2) {
      resolve('Step A finished. You are now wearing a(n) ' + color + ' t-shirt!');
    } else {
      reject('You got the order wrong');
    }
  });
}

function wearUnderwear(color) {
  return new Promise(function (resolve, reject) {
    setTimeout(function() {
      human.push('Underwear');
      if (human[human.length - 2] != 'Jeans') {
        resolve('Step B finished. You are now wearing ' + color + ' underwear!');
      } else {
        reject('Oh no! You are wearing underwear over your jeans!');
      }
    }, 1000);
  });
}

function wearJeans(color) {
  return new Promise(function (resolve, reject) {
    human.push('Jeans');
    if (human[human.length - 1] == 'Jeans') {
      resolve('Step C finished. You are now wearing a pair of ' + color + ' jeans!\nYou are looking sharp this morning!');
    } else {
      reject('Oh no! You are wearing underwear over your jeans!');
    }
  });
}

wearShirt('orange').then(function (shirtResponse) {
  console.log(shirtResponse);
  return wearUnderwear('white');
}).then(function (underwearResponse) {
  console.log(underwearResponse);
  return wearJeans('red');
}).then(function (jeansResponse) {
  console.log(jeansResponse);
}).catch(function (error) {
  console.log(error);
});

/* Expected Result:
Step A finished. You are now wearing a(n) orange t-shirt!
Promise {<pending>}
Step B finished. You are now wearing white underwear!
Step C finished. You are now wearing a pair of red jeans!
You are looking sharp this morning!
*/