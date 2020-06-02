
function Step_XYZ(clothing) {
  human.push(clothing);
  console.log('You got your ' + clothing + ' on!');
  if (human[2] == 'pants' && human[3] == 'underwear') {
    console.log('The underwear is over your pants!');
  } else {
    console.log('You are looking sharp this morning!');
  }
}


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

// ----------

setTimeout(function() {
  human.push(clothing);
  if (human.length == 3) {
    console.log('Step B finished. You got your ' + clothing + ' on!');
  } else {
    console.log('You got the order wrong');
  }
}, delay);

return new Promise(function (resolve, reject) {
  setTimeout(function() {
    human.push(clothing);
    if (human.length == 3) {
      resolve('Step B finished. You got your ' + clothing + ' on!');
    } else {
      reject('You got the order wrong');
    }
  }, delay);
});