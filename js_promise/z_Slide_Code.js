// Intro to Promises Event's Slide Code
// i.e. Code that appears only on the slides


// ==============================
// Slide 41 - Chaining Several Promises
var getDataA = eatBreakfast('eggs');
var getDataB = getNews('NPR');
var getDataC = packingBags('working');

Promise.all([
  getDataA, getDataB, GetDataC
]).then(function (multipleResp) {
  console.log(multipleResp);
}).catch(function (error) {
  console.log(error);
});
// ==============================
// Slide 41 - Chaining Several Promises

wearShirt('orange').then(function (respShirt) {
  console.log(respShirt);
  wearUnderwear('white').then(function (respUnderwear) {
    console.log(respUnderwear);
    wearJeans('red').then(function (respJeans) {
      console.log(respJeans);
    }).catch(function (errorJeans) {
      console.log(errorJeans);
    });
  }).catch(function (errorUnderwear) {
    console.log(errorUnderwear);
  });
}).catch(function (errorShirt) {
  console.log(errorShirt);
});

wearShirt('orange').then(function (respShirt) {
  console.log(respShirt);
  return wearUnderwear('white');
}).then(function (underwearResponse) {
  console.log(underwearResponse);
  return wearJeans('red');
}).then(function (jeansResponse) {
  console.log(jeansResponse);
}).catch(function (error) {
  console.log(error);
});

// ==============================
// Slide 13 - Synchronous Processing

function wearShirt(color) {
  console.log(color + ' t-shirt!');
}

function wearUnderwear(color) {
  console.log(color + ' underwear!');
}

function wearJeans(color) {
  console.log(color + ' jeans!');
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
// ==============================

function Step_XYZ(clothing) {
  human.push(clothing);
  console.log('You got your ' + clothing + ' on!');
  if (human[2] == 'pants' && human[3] == 'underwear') {
    console.log('The underwear is over your pants!');
  } else {
    console.log('You are looking sharp this morning!');
  }
}
// ==============================

function Step_XYZ(clothing) {
  return new Promise(function (resolve, reject) {
    human.push(clothing);
    console.log('You got your ' + clothing + ' on!');
    if (human[2] == 'pants' && human[3] == 'underwear') {
      reject('The underwear is over your pants!');
    } else {
      resolve('You are looking sharp this morning!');
    }
  });
}

// ----------

Step_XYZ('scarf').then(function (result) {

  console.log(result);
  return 'Process successful';

}).then(function (finish) {

  console.log(finish);

}).catch(function (error) {

  console.log(error);

});

wearJeans('red').then(function (resp) {

  console.log(resp);
  return 'Process successful';

}).then(function (finish) {

  console.log(finish);

}).catch(function (error) {

  console.log(error);

});

// ----------

setTimeout(function () {
  human.push(clothing);
  if (human.length == 3) {
    console.log('Step B finished. You got your ' + clothing + ' on!');
  } else {
    console.log('You got the order wrong');
  }
}, delay);

return new Promise(function (resolve, reject) {
  setTimeout(function () {
    human.push(clothing);
    if (human.length == 3) {
      resolve('Step B finished. You got your ' + clothing + ' on!');
    } else {
      reject('You got the order wrong');
    }
  }, delay);
});