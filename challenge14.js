// Write a JavaScript function that takes a sentence as an argument and determines which word in that sentence has the greatest number of repeated letters.
//
// If the sentence has multiple words with the same max of repeated letters, return them all in an Array.

function wordSelector(wordString){
  var wordsByNumCount = {};
  // split the string into an array of words
  ArrayOfWords = wordString.split(' ');
  // for each word...
  ArrayOfWords.forEach(function(element){

    // Split the word into an array of letters
    ArrayOfLetters = element.split('');
    var count = {};
    var highestNum = 0;

    // for each letter...
    ArrayOfLetters.forEach(function(letter, letterIndex){
      // console.log('letter: ' + letterIndex + ' is ' + letter);

      // Read the letter and increment the appropriate Object Key
      if(count[letter] === undefined){
        count[letter] = 1;
      } else {
        count[letter] += 1;
      }

      // Check if the object key has the new highest repeated letter record
      if(count[letter] > highestNum){
        highestNum = count[letter];
      }
    });

    // assign the word its key in wordsByNumCount with a value equal to its highestNum
    wordsByNumCount[element] = highestNum

  });
  console.log(wordsByNumCount);
}







wordSelector('I attribute my success to this: I never gave or took any excuse. –Florence Nightingale');
