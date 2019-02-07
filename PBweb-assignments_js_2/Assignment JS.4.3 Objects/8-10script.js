var Rational10 = {
      option: function() {
            selection = document.getElementById('operation').value;


            if (selection == "1") {

              a = Rational10.multiply();
              return a
            } else if (selection == "2") {
              b = Rational10.division();
              return b
            } else if (selection == "3") {
              c = Rational10.addition();
              return c
            } else {
              d = Rational10.subtraction();
              return d
            }
      },

      reduce: function(topm, botm) {
            var gcd = function gcd(a, b) {
                  return b ? gcd(b, a%b) : a;
            };

            gcd = gcd(topm, botm);
            return (topm/gcd) + '/' + (botm/gcd);
      },

      multiply: function() {
            Number1 = parseInt(document.getElementById("n1").value);
            Number2 = parseInt(document.getElementById("n2").value);
            Number3 = parseInt(document.getElementById("n3").value);
            Number4 = parseInt(document.getElementById("n4").value);


            var topm = Number1 * Number2;
            var botm = Number3 * Number4;

            return Rational10.reduce(topm, botm);
      },

      division: function() {
            Number1 = parseInt(document.getElementById("n1").value);
            Number2 = parseInt(document.getElementById("n2").value);
            Number3 = parseInt(document.getElementById("n3").value);
            Number4 = parseInt(document.getElementById("n4").value);

            var topm2 = Number1 * Number4;
            var botm2 = Number2 * Number3;

            return Rational10.reduce(topm2, botm2);
      },

      addition: function() {
            Number1 = parseInt(document.getElementById("n1").value);
            Number2 = parseInt(document.getElementById("n2").value);
            Number3 = parseInt(document.getElementById("n3").value);
            Number4 = parseInt(document.getElementById("n4").value);

            var topm3 = Number1 * Number4 + Number2 * Number3;
            var botm3 = Number3 * Number4;

            return Rational10.reduce(topm3, botm3);
      },

      subtraction: function() {
            Number1 = parseInt(document.getElementById("n1").value);
            Number2 = parseInt(document.getElementById("n2").value);
            Number3 = parseInt(document.getElementById("n3").value);
            Number4 = parseInt(document.getElementById("n4").value);

            var topm4 = Number1 * Number4 - Number2 * Number3;
            var botm4 = Number3 * Number4;

            return Rational10.reduce(topm4, botm4);
      }
};
