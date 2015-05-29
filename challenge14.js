function wordSelector(wordString){
  ArrayOfWords = wordString.split(' ');
  ArrayOfWords.forEach(function(element){
    ArrayOfLetters = element.split('');
    ArrayOfLetters.forEach(function(letter, letterIndex){
      console.log('letter: ' + letterIndex + ' is ' + letter);
    })
  })
}







wordSelector('I attribute my success to this: I never gave or took any excuse. –Florence Nightingale');
