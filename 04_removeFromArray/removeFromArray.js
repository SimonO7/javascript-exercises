const removeFromArray = function(srcArray, elementsToRemove) {
    elementsArrayToRemove = [...arguments].slice(1);
    for (let element of elementsArrayToRemove) {
        const index = srcArray.indexOf(element);
        srcArray.splice(index, 1);
    }
    return srcArray;
};

// Do not edit below this line
module.exports = removeFromArray;
