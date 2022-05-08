const reverseString = function(str) {
    strArray = str.split("");
    strArray.reverse();
    reversedString = strArray.join("");
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
