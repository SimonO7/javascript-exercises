const palindromes = function (str) {
    const strArray = new Array();
    const lowerStr = str.toLowerCase();
    for (let pos = 0; pos < lowerStr.length; pos++) {
        if (lowerStr.charCodeAt(pos) >= 97 && lowerStr.charCodeAt(pos) <= 122) {
            strArray.push(lowerStr[pos]);
        }
    }
    const reversedArray = [...strArray];
    reversedArray.reverse();
    for (let i = 0; i < reversedArray.length; i++) {
        if (reversedArray[i] !== strArray[i]) {
            return false;
        }
    }

    return true;
};

// console.log(palindromes('Rats live on no evil star.'));

// Do not edit below this line
module.exports = palindromes;
