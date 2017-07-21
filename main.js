var hotText = 'MDN'
var URL = 'https://developer.mozilla.org/';

document.write('click to return to ' + hotText.link(URL));

// alert('Welcome to the page');
// var name = prompt('what is your name?')
// var favoriteColor = prompt('what is your favorite color?');
//
// document.write('Hello my name is ' + name + ' and my favorite color is ' + favoriteColor);
//
// console.log('Program Complete');

// var age = prompt('what is your age?')
// var yearsAlive = parseInt(age);
//
// yearsAlive = yearsAlive * 365;
//
// document.write('you have been alive for ' + yearsAlive + ' days!!!')

// var number = Math.floor(Math.random() * 50) + 1;
// alert(number);

// var number2 = prompt('whats ur favorit number?');
// number2 = parseInt(number2);
//
// var  number = Math.floor(Math.random()* number2) + 1;
// alert('your number is ' + number);
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
//
// var response = prompt('would you like to participate?');
// if(response === 'yes'){
//   alert('thank you for replying ' + response);
// } else{
//   alert('thank you for visiting');
//   document.write('come back and see us!');
// }
