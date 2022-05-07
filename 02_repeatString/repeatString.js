const repeatString = function(string, num) {
    let str = "";    //The final string
    let count = 0;
    while (count < num) {
        str += string;
        count++;
    }
    return str;
};

// Do not edit below this line
module.exports = repeatString;
