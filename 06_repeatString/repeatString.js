const repeatString = function(str, num) {
    let repeatedStr = "";
    for(let i = 0; i < num; i++) {
        repeatedStr += str;
    }
    return repeatedStr;
};
repeatString("hello", 10);

// Do not edit below this line
module.exports = repeatString;
