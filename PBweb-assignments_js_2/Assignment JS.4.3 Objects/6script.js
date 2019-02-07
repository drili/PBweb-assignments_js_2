/*
6.0
Write a method toFloat. It must return the value of the fraction as a floating
point number with decimals, as approximate asd they may be.
*/
var Rational6 = {
      toFloat: function (numerator, denominator) {
            this.numerator = numerator;
            this.denominator = denominator;

            toFloatValue = this.numerator / this.denominator;
      },

      toString: function () {
            return toFloatValue + ' is the value of ' + this.numerator + ' divided by ' + this.denominator;
      }
};

var r1 = Object.create(Rational6);
r1.toFloat(22, 3);
console.log(r1.toString());
// This function will calculate the fractions into decimals
