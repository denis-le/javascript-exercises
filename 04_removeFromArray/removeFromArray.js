const removeFromArray = function(array, ...index) {
    let newArray = [];
    for (let element of array) {
        if (!index.includes(element)) {
            newArray.push(element);
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
