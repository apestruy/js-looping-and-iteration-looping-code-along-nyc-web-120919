function writeCards(array, event) {
  let thankYouCards = []
  for (let i = 0; i < array.length; i++) {
    thankYouCards.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
  }
return thankYouCards
}

function countDown(x) {
  while (x > -1) {
    console.log(x)
    x--
  }
}