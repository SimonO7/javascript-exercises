const repeatString = function(string, num) {
    let str = "";    //The final string
    let count = 0;

    if (num < 0) {
        return "ERROR"; //Return ERROR with negative numbers
    }

    while (count < num) {
        str += string;
        count++;
    }
    return str;
};

// Do not edit below this line
module.exports = repeatString;
