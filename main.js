// var hotText = 'MDN'
// var URL = 'https://developer.mozilla.org/';
//
// document.write('click to return to ' + hotText.link(URL));


function calc_age (age) {
  var yearsAlive = parseInt(age);

  yearsAlive = yearsAlive * 365;
  return yearsAlive;

  //document.write('you have been alive for ' + yearsAlive + ' days!!!')

  //var number = Math.floor(Math.random() * 50) + 1;
  //return(number);
}

exports.calc_age = calc_age;
