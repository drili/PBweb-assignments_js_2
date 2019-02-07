/*
2.0
If the caller does not provide parameters, the function should create the fraction 0/1.
*/
var Rational2 = {
      fraction: function (numerator, denominator) {
            this.numerator = numerator;
            this.denominator = denominator;

            if (numerator == undefined && denominator == undefined) {
                  numerator = 0;
                  denominator = 1;
                  console.log(numerator + '/' + denominator);
            } else {
                  console.log(numerator + '/' + denominator);
            }
      },

      toString: function () {
            return this.numerator + '/' + this.denominator;
      }
}

var r1 = Object.create(Rational2);
r1.fraction(7, 5);
console.log(r1);
console.log(r1.toString());

var r2 = Object.create(Rational2);
r2.fraction(); // No parameters defined, the log should return 0/1 as fraction
