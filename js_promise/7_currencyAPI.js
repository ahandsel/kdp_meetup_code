// Part 2 - Currency API

(function () {
  'use strict';
  var currencyapiEndpoint = 'https://currencyapi.net/api/v1/rates?key=demo';

  // Currency API call
  kintone.proxy(currencyapiEndpoint, 'GET', {}, {}, function (resp) {
    var jsonResp = JSON.parse(resp);
    console.log(jsonResp);
  }, function(error) {
    console.log(error);
  });
})();