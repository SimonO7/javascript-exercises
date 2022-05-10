const sumAll = function(start, end) {
    let result = 0;
    for (let num = start; num <= end; num++) {
        result += num;
    }
    return result;
};
console.log(sumAll(0, 10));
// Do not edit below this line
module.exports = sumAll;
