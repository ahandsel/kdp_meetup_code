// 2_asynchronous_a.js
// Hands-on: Asynchronous Processing A
// Good morning, what shall we wear today?

function wearShirt(color) {
  console.log('Let\'s wear a(n) ' + color + ' t-shirt!');
}

function wearUnderwear(color) {
  setTimeout(function() {
    console.log('Let\'s wear ' + color + ' underwear!');
  }, 1000);
}

function wearJeans(color) {
    console.log('Let\'s wear ' + color + ' jeans!');
}

wearShirt('orange');
wearUnderwear('white');
wearJeans('red');

/* Expected Result:
Let's wear a(n) orange t-shirt!
Let's wear red jeans!
undefined
Let's wear white underwear!
*/