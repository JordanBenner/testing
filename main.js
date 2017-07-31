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

var correctAnswer = false;
var answer= prompt('what is 2+2?');

  if (answer === '4'){
  var correctAnswer = true;
  }
  else if (correctAnswer == true){
  alert('good job the answer is indeed ' + answer);
  document.write('you are a math wiz!');
  }
  else{
    alert('sorry that is not the right answer.');
    document.write('Please try again.')
  }

var points = 0;
var answer = prompt('what is 2+2?');
if (anser === '4'){
  points === points +1;
   alert('good job');
else{
  alert('try again');
  }
}
//
var points = 0;
var question2 = prompt('what is 200 + 10?');
if (answer === '210'){
  points === points +1;
  alert('your are killing it!');
else {
  alert('try again');
  }
}

if (points === 2 || points ===3){
  alert('congrats you passed the quiz!');
  else {
    document.write('take quiz again?');
  }
}
