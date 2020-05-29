var money = 1000;

function minusA(num) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            money = money - num;
            if (money > 0) {
                resolve('Process A finished. You have $' + money + ' remaining.');
            } else {
                reject('Your cash total is negative');
            }
        }, 1000);
    });
}

function minusB(num) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            money = money - num;
            if (money > 0) {
                resolve('Process B finished. You have $' + money + ' remaining.');
            } else {
                reject('Your cash total is negative');
            }
        }, 1000);
    });
}

function minusC(num) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            money = money - num;
            if (money > 0) {
                resolve('Process C finished. You have $' + money + ' remaining.');
            } else {
                reject('Your cash total is negative');
            }
        }, 1000);
    });
}

minusA(600).then(function (resultA) {
    console.log(resultA);
    return minusB(500);
}).then(function (resultB) {
    console.log(resultB);
    return minusC(400);
}).then(function (resultC) {
    console.log(resultC);
}).catch(function (error) {
    console.log(error);
});