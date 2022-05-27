'use strict';

// 1. countWords
function countWords(phrase) {
  // Replace this with your code
  let counts = {}
  let words = phrase.split(" ")

  for (let word of words){
    if (counts[word] === undefined){
      counts[word] = 1;
    } else{
      counts[word] += 1;
    }
  }
  return counts;
}

// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  // Replace this with your code
  const melonPrices = {
    2.50: ['Cantaloupe', 'Honeydew'],
    2.95: ['Watermelon'],
    3.25: ['Musk', 'Crenshaw'],
    14.25: ['Christmas']
    }
  
    if (melonPrices[price] === undefined) {
      return
    }
return melonPrices[price].sort();
    
}
