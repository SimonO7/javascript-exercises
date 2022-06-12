const palindromes = function (str) {
    const strArray = new Array();
    for (let pos = 0; pos < str.length; pos++) {
        if (str.toLowerCase().charCodeAt(pos) >= 97 && str.toLowerCase().charCodeAt(pos) <= 122) {
            strArray.push(str[pos].toLowerCase());
        }
    }
    const reversedString = [...strArray].reverse().join("");
    const originalString = strArray.join("");
    return (reversedString === originalString);
};

// Do not edit below this line
module.exports = palindromes;
