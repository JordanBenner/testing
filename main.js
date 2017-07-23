// var hotText = 'MDN'
// var URL = 'https://developer.mozilla.org/';
//
// document.write('click to return to ' + hotText.link(URL));


function calc_age (age) {
  var yearsAlive = parseInt(age);

  yearsAlive = yearsAlive * 365;
  return yearsAlive;
}

exports.calc_age = calc_age;

// var correctAnswer = false;
// var answer= prompt('what is 2+2?');
//
//   if (answer === '4'){
//   var correctAnswer = true;
//   }
//   else if (correctAnswer == true){
//   alert('good job the answer is indeed ' + answer);
//   document.write('you are a math wiz!');
//   }
//   else{
//     alert('sorry that is not the right answer.');
//     document.write('Please try again.')
//   }
