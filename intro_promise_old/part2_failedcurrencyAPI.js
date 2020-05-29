var url = 'https://currencyapi.net/api/v1/rates?key=demo';

fetch( url )
.then( function( data ) {
  return data.json();
})
.then( function( json ) {
  console.log(json);
})