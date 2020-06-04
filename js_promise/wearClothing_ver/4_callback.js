// 4_callback.js
// Hands-on: Callback Functions
// Let's fix the asynchronous problem by calling wearJeans inside wearUnderwear function!

var human = ['Naked'];

function wearShirt(color) {
  human.push('T-Shirt');
  console.log('You are now wearing a(n) ' + color + ' t-shirt!');
}

function wearUnderwear(color, func) {
  setTimeout(function() {
    human.push('Underwear');
    console.log('You are now wearing ' + color + ' underwear!');
    if(human[human.length - 2] == 'Jeans') {
      // Check if you have jeans on before putting on the underwear.
      console.log('Oh no! You are wearing underwear over your jeans!');
    }
    func('red');
  }, 1000);
}

function wearJeans(color) {
    human.push('Jeans');
    console.log('You are now wearing a pair of ' + color + ' jeans!');
    if(human[human.length - 2] == 'Underwear') {
      // Check if you have underwear on before putting on the jeans.
      console.log('You are looking sharp this morning!');
    }
}

wearShirt('orange');
wearUnderwear('white', wearJeans);

/* Expected Result:
You are now wearing a(n) orange t-shirt!
undefined
You are now wearing white underwear!
You are now wearing a pair of red jeans!
You are looking sharp this morning!
*/