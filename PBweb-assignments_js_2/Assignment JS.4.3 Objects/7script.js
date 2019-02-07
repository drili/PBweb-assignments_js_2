/*
7.0
Write a method reduce. It must reduce the fraction as much as possible.
The calculation is done by dividing the numerator and the denominator with their greatest common denominator,
the biggest number that divides both. I shall provide you with a function gcd(n, d) that will return this number given two integers as input.
*/

var Rational7 = {
      reduce: function(numerator, denominator) {
            this.numerator = numerator;
            this.denominator = denominator;

            var gcd = function gcd(a, b) {
                  return b ? gcd(b, a%b) : a;
            };

            gcd = gcd(numerator, denominator);
            return (numerator/gcd) + '/' + (denominator/gcd);
      }
}

var r1 = Object.create(Rational7);
console.log(r1.reduce(144, 96));
// This function will reduce the fraction using the greatest common divisor and dividing by it, check console for output
