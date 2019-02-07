/*
3.0
Write a method toString() that will present the fraction as the string "3/7" for example.
If the fraction is an integer it should be presented as a string with only the numerator, ie without the "/1".
*/
var Rational3 = {
      fraction: function (numerator, denominator) {
            this.numerator = numerator;
            this.denominator = denominator;
      },

      toString: function () {
            if (this.denominator == 1) {
                  return this.numerator;
            } else {
                  return this.numerator + '/' + this.denominator;
            }
      }
}

var r1 = Object.create(Rational3);
r1.fraction(34, 5);
console.log(r1);
console.log(r1.toString());

var r2 = Object.create(Rational3);
r2.fraction(34, 1);
console.log(r2);
console.log(r2.toString());

// The function will return the values as an integer (in this case 34) since the denominator is equal to 1
