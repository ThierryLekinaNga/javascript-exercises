const sumAll = function(a, b) {
            let sum = 0;
            if(a < 0 || b < 0) return "ERROR";
            else if(Number.isInteger(a) === false || Number.isInteger(b) === false) return "ERROR";
            else if(Number.isNaN(a) === true || Number.isNaN(b) === true) return "ERROR";
            else {
                if(a < b) {
                    for(; a <= b; a++) sum += a;
                }
                else if(a > b) {
                    for(; b <= a; b++) sum += b;
                }
            }
            return sum;
        }
        sumAll(2, 4);
        sumAll(1, 4000);
        sumAll(123, 1);
        sumAll(-10, 4);
        sumAll(2.5, 4);
        sumAll(10, "90");
        sumAll(10, [90, 1]);
// Do not edit below this line
module.exports = sumAll;
