const repeatString = function(str, num) {
    let repeatedStr = "";
    if(num < 0) repeatedStr = "ERROR";
    else { for(let i = 0; i < num; i++) repeatedStr += str; }
    return repeatedStr;
};
repeatString("hey", 3);
repeatString("hello", 10);
repeatString("hi", 1);
repeatString("bye", 0);
repeatString("goodbye", -1)
repeatString("", 10);
const number = Math.floor(Math.random() * 1000);
repeatString("hey", number);
repeatString("don't use the built-in repeat method!", 1);
// Do not edit below this line
module.exports = repeatString;
