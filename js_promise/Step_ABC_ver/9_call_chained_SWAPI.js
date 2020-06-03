// Part 2 - Call Chained SWAPI

(function () {
  'use strict';
  var SWAPIendpoint = 'https://swapi.co/api/people/?';
  var SWAPIparams = 'search=Luke';
  var SWAPIurl = SWAPIendpoint + SWAPIparams;

  // Star Wars API call
  var getStarWarsCharacterWithPromise = function () {
    // Get Character Details
    return new kintone.Promise(function (resolve, reject) {

      kintone.proxy(SWAPIurl, 'GET', {}, {}, function (resp) {
        var jsonResp = JSON.parse(resp).results[0];
        console.log(jsonResp);
        resolve(jsonResp);
      }, function (err) {
        console.log(err);
        reject(err);
      });

    }).then(function (resp) {

      // Get Homeworld details
      return new kintone.Promise(function (resolve, reject) {
        kintone.proxy(resp.homeworld, 'GET', {}, {}, function (respHomeworld) {
          var jsonResp = JSON.parse(respHomeworld);
          console.log(jsonResp);
          resolve(resp);
        }, function (err) {
          console.log(err);
        });
      });

    }).then(function (resp) {

      // Get Species details
      return new kintone.Promise(function (resolve, reject) {
        kintone.proxy(resp.species[0], 'GET', {}, {}, function (respSpecies) {
          var jsonResp = JSON.parse(respSpecies);
          console.log(jsonResp);
          resolve(resp);
        }, function (err) {
          console.log(err);
        });
      });

    });
  };

  // Create a button on the Kintone Record List page
  kintone.events.on('app.record.index.show', function (event) {
    var button = document.createElement('button');
    button.textContent = 'Click Me!';
    kintone.app.getHeaderMenuSpaceElement().appendChild(button);
    button.onclick = function () {

      console.log('Start Search');
      getStarWarsCharacterWithPromise().then(function (resp) {
        console.log('End Search');
      });
    };
    return event;
  });

})();