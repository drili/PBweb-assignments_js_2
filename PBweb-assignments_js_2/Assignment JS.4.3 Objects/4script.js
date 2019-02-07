/*
4.0
Write a method negate which will reverse the sign of the fraction from minus to plus, or vice versa.
*/
var Rational4 = {
      negate: function (numerator, denominator) {
            this.numerator = numerator;
            this.denominator = denominator;

            if (this.numerator > 0 && this.denominator > 0) {
                  this.numerator = '-' + this.numerator;
                  this.denominator = '-' + this.denominator;
            } else if (this.numerator < 0 && this.denominator < 0) {
                  this.numerator *= -1;
                  this.denominator *= -1;
            } else {
                  return false;
            }
      },

      toString: function () {
            return this.numerator + '/' + this.denominator;
      }
};

var r1 = Object.create(Rational4);
r1.negate(34, 5);
console.log(r1);
console.log(r1.toString());
// The r1 fraction will dispaly as -34 and -5, check the log

var r2 = Object.create(Rational4);
r2.negate(-34, -5);
console.log(r2);
console.log(r2.toString());
