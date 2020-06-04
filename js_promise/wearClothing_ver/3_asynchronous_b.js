// 3_asynchronous_b.js
// Hands-on: Asynchronous Processing B
// Alright, time to get dressed!

var human = ['Naked'];

function wearShirt(color) {
  human.push('T-Shirt');
  console.log('You are now wearing a(n) ' + color + ' t-shirt!');
}

function wearUnderwear(color) {
  setTimeout(function() {
    human.push('Underwear');
    console.log('You are now wearing ' + color + ' underwear!');
    if(human[human.length - 2] == 'Jeans') {
      // Check if you have jeans on before putting on the underwear.
      console.log('Oh no! You are wearing underwear over your jeans!');
    }
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
wearUnderwear('white');
wearJeans('red');

/* Expected Result:
You are now wearing a(n) orange t-shirt!
You are now wearing a pair of red jeans!
undefined
You are now wearing white underwear!
Oh no! You are wearing underwear over your jeans!
*/