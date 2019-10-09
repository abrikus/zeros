module.exports = function zeros(expression) {
  let numbers = expression.split('*');
  let two = 0;
  let five = 0;
  let number = 0;
  let iter = 1;
  for (let i=0; i < numbers.length; i++) {
    number = numbers[i].substring(0, numbers[i].indexOf('!'));
    if (numbers[i].indexOf('!!') === -1) {   // for single factorial
      for (let j = 1; j <= number; j++) {
        iter = j;
        if (iter%2 == 0) {    //numbers of two
          two++;
        }
        while (iter%5 == 0) {     //numbers of five
          iter = iter/5;
          five++;
        }
      }
    }
    else {    // for double factorial
      if (number%2 !== 0) {     // for odd numbers
        for (let k = 1; k <= number; k++) {
          iter = k;
          while (iter%5 == 0) {
            iter = iter/5;
            five++;
          }
          k++;
        }
      }
      else {    // for even numbers
        for (let l = 1; l <= number; l++) {
          l++;
          iter = l;
          two++;
          while (iter%5 == 0) {
            iter = iter/5;
            five++;
          }
        }
      }
    }
  }
  if (two > 0) {    // zero
    return five;
  }
  else {
    return 0;
  }
}
