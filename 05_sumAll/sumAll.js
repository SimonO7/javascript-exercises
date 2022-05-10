const sumAll = function(num1, num2) {
    let result = 0;
    let start, end;

    if (num1 < 0 || num2 < 0 || typeof(num1) != "number" || typeof(num2) != "number") {
        return "ERROR";
    }

    if (num1 < num2) {
        start = num1;
        end = num2;
    }
    else {
        start = num2;
        end = num1;
    }

    for (let num = start; num <= end; num++) {
        result += num;
    }

    return result;
};
sumAll(1, 4)
// Do not edit below this line
module.exports = sumAll;
