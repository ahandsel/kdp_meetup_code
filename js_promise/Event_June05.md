# Notes from the event

1. [Notes from the event](#notes-from-the-event)
2. [Hands-on: Asynchronous Processing A](#hands-on-asynchronous-processing-a)
3. [Hands-on: Asynchronous Processing B (Issues)](#hands-on-asynchronous-processing-b-issues)
4. [Hands-on: Callback Functions](#hands-on-callback-functions)
5. [Hands-on: Promises](#hands-on-promises)
6. [6_alert.js](#6_alertjs)
7. [7_currencyapi.js](#7_currencyapijs)
8. [8_call_SWAPI.js](#8_call_swapijs)
9. [9_call_chained_SWAPI.js](#9_call_chained_swapijs)
10. [Kintone Developer Event Survey:](#kintone-developer-event-survey)

# Main
= = = = = = = = = = = = = = = =

Slides:
https://bit.ly/KDP_JS

Code Gist:
https://bit.ly/KDP_PROMISES

Kintone Developer License:
http://bit.ly/KDP_Signup

= = = = = = = = = = = = = = = =


# Hands-on: Asynchronous Processing A

  https://gist.github.com/ahandsel/9fc0bf1daa1c03403710bc39da7665dd#file-2_asynchronous_a-js

= = = = = = = = = = = = = = = =

# Hands-on: Asynchronous Processing B (Issues)

  3_asynchronous_b.js

  https://gist.github.com/ahandsel/9fc0bf1daa1c03403710bc39da7665dd#file-3_asynchronous_b-js

= = = = = = = = = = = = = = = =

# Hands-on: Callback Functions

  https://gist.github.com/ahandsel/9fc0bf1daa1c03403710bc39da7665dd#file-4_callback-js

= = = = = = = = = = = = = = = =

# Hands-on: Promises

  https://gist.github.com/ahandsel/9fc0bf1daa1c03403710bc39da7665dd#file-5_promise-js

= = = = = = = = = = = = = = = =

# Kintone App Download Link

YOUR_SUBDOMAIN.kintone.com/k/#/market/app/816

= = = = = = = = = = = = = = = =

# 6_alert.js

Left click and save the following as JavaScript file

   https://gist.githubusercontent.com/ahandsel/9fc0bf1daa1c03403710bc39da7665dd/raw/08f7c4174a0ff367a252a10f6326e0a2a3699fb0/6_alert.js

= = = = = = = = = = = = = = = =

# 7_currencyAPI_failed.js

Copy & Paste this on console on Kintone Subdomain

https://gist.github.com/ahandsel/9fc0bf1daa1c03403710bc39da7665dd/#file-7_currencyapi_failed-js

= = = = = = = = = = = = = = = =

# currencyapi.js Failure version:

Copy & Paste this on console on Kintone Subdomain

https://gist.github.com/ahandsel/9fc0bf1daa1c03403710bc39da7665dd/#file-7_currencyapi_failed-js


= = = = = = = = = = = = = = = =

# currencyapi.js Successful version:

Copy & Paste this on console on Kintone Subdomain:

https://gist.github.com/ahandsel/9fc0bf1daa1c03403710bc39da7665dd/#file-7_currencyapi-js

= = = = = = = = = = = = = = = =

Current step:
Save the 8_call_SWAPI.js and upload the following code on your Kintone App

https://gist.githubusercontent.com/ahandsel/9fc0bf1daa1c03403710bc39da7665dd/raw/08f7c4174a0ff367a252a10f6326e0a2a3699fb0/8_call_SWAPI.js

= = = = = = = = = = = = = = = =

 # 9_call_chained_SWAPI.js

Left-click & save the following as JavaScript file:

https://gist.githubusercontent.com/ahandsel/9fc0bf1daa1c03403710bc39da7665dd/raw/08f7c4174a0ff367a252a10f6326e0a2a3699fb0/9_call_chained_SWAPI.js

= = = = = = = = = = = = = = = =

# Kintone Developer Event Survey:

  https://bit.ly/KDP_FEEDBACK

Your feedback helps us improve our futer workshops! Thank you!

The slides are posted here:
https://bit.ly/KDP_JS

Recording of today's workshop will be posted tomorrow on the same website and will be shared to Women Who Code.

= = = = = = = = = = = = = = = =

# Memo

* [ ] Create a KDP article on Developer Console
  * https://support.airtable.com/hc/en-us/articles/232313848

* [ ] Slide 23 => highlight setTimeOut

* 1 hour on Slide 43
* [] Quick break on Slide 35?

* [] Edit & upload video
  * Share with `fabio.atsousa@gmail.com `

* [ ] Update the SWAPI url
  * https://swapi.dev/


* Fix Code #9

## Feedback Call Notes:
* Easy to follow
* Got lost at Kintone but was able to catch up
* [] Slide on Chrome Developer Console
* Repeating the steps helped others catch up
* Show out with favorite food worked
* Add a full, bigger image of the code on the Hands-on slides
* More detailed slides through Kintone
* Do the currency API --> Do it on Nim's Side
  * Record a demo video of the currency API demo

### Asking for JS background question:
* Scale 1 to 10, what is your JavaScript background
* Follow up, tell me where you are now

### Timing
  * We want another 15 minutes
    * 2 hours & 15 minutes
  * Which points were too slow/ repeating without need?
    * Not really, it was well pace given the different level of background of the attendee's


= = = = = = = = = = = = = = = =

My understanding is that only `wearUnderwear()` function is causing the `undefined` since it includes `setTimeout`.

`setTimeout` does not pass any parameters.

For more information on `setTimeout`
https://javascript.info/settimeout-setinterval

= = = = = = = = = = = = = = = =

wearShirt('orange').then(function (shirtResponse) {
  console.log(shirtResponse);
  return wearUnderwear('white');
}).then(function (underwearResponse) {
  
  console.log(underwearResponse);
  return wearJeans('red');
}).then(function (jeansResponse) {

  console.log(jeansResponse);
}).catch(function (error) {

  console.log(error);
});

= = = = = = = = = = = = = = = =
