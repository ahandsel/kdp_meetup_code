function PrintWordA(word) {
  console.log(word);
}

function PrintWordB(word) {
  setTimeout(function() {
    console.log(word);
  }, 1000);
}

function PrintWordC(word) {
  console.log(word);
}

PrintWordA('Piece');
PrintWordB('of');
PrintWordC('Cake.');