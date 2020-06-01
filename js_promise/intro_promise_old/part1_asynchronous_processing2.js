var money = 1000;

function minusA(num) {
  money = money - num;
  if (money > 0) {
    console.log('Process A finished. You have $' + money + ' remaining.');
  } else {
    console.log('Process A finished. Your cash total is negative.');
  }
}

function minusB(num) {
  setTimeout(function() {
    money = money - num;
    if (money > 0) {
      console.log('Process B finished. You have $' + money + ' remaining.');
    } else {
      console.log('Process B finished. Your cash total is negative.');
    }
  }, 1000);
}

function minusC(num) {
  money = money - num;
  if (money > 0) {
    console.log('Process C finished. You have $' + money + ' remaining.');
  } else {
    console.log('Process C finished. Your cash total is negative.');
  }
}

minusA(600);
minusB(500);
minusC(200);