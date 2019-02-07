/*
5.0
Write a method invert which will invert the fraction by swapping the numerator
and the denominator. This is sometimes the reciprocal value of the fraction.
*/

var Rational5 = {
      invert: function (numerator, denominator) {
            this.numerator = numerator;
            this.denominator = denominator;

            // Array destructurer method to swap numerator with denominator
            [this.numerator, this.denominator] = [this.denominator, this.numerator];
      },

      toString: function () {
            return this.numerator + '/' + this.denominator + ', the fraction has been inverted';
      }
}

var r1 = Object.create(Rational5);
r1.invert(22, 5);
console.log(r1);
console.log(r1.toString());
// This invert function will invert the numerator (22) and the denominator (5), so the fraction
// will be 5 / 22 instead of 22 / 5
