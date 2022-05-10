const removeFromArray = function(srcArray, elementsToRemove) {
    //Take all elements after first element and store into array. These are elements to remove.
    elementsArrayToRemove = [...arguments].slice(1);

    //Check each element to remove and remove it from array
    for (let element of elementsArrayToRemove) {
        //Find the index of the element to remove in the source array
        const index = srcArray.indexOf(element);
        //If the element is not there, index will be -1. If index is -1, move to next element.
        if (index === -1) continue;
        //If index isn't -1, remove the element from the source array.
        srcArray.splice(index, 1);
    }
    return srcArray;
};

// Do not edit below this line
module.exports = removeFromArray;
