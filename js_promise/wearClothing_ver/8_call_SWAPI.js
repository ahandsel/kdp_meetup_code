// 8_call_SWAPI.js
// Part 2 - Call SWAPI

(function () {
    'use strict';
    var SWAPIendpoint = 'https://swapi.co/api/people/?';
    var SWAPIparams = 'search=Luke';
    var SWAPIurl = SWAPIendpoint + SWAPIparams;

    // Star Wars API call
    var getStarWarsCharacterWithPromise = function () {
      return new kintone.Promise(function (resolve, reject) {
        kintone.proxy(SWAPIurl, 'GET', {}, {}, function (resp) {
          var jsonResp = JSON.parse(resp).results[0];
          console.log(jsonResp)
          resolve();
        }, function (err) {
          console.log(err);
          reject(err);
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
        getStarWarsCharacterWithPromise().then(function () {
          console.log('End Search');
        });
      };
      return event;
    });
  })();