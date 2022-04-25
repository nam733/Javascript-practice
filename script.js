//Implementation of Map
Array.prototype.mymap = function (callback) {
    const resultArray = [];
    for (let index = 0; index < this.length; index++) {
        resultArray.push(callback(this[index], index, this));
    }
    return resultArray;
}

const sample = [1, 2, 3];
const mapResult = sample.mymap(function (val, index, array) {
    console.log('val :', val, 'index :', index, 'array :', array);
    return (val * 2);
});

console.log(sample);
console.log(mapResult);

const res = sample.mymap(n => n * 5);
console.log(res);

//Implementation of Filter
Array.prototype.fooFilter = function (checkElement) {
    console.log(checkElement);
    const returnArr = [];
    for (let i = 0; i < this.length; i++) {
        if (checkElement(this[i])) {
            returnArr.push(this[i]);
        }
    }
    return returnArr;
};

const arr = [1, 3, 5, 6, 9, 11, 26, 8, 35, 10, 7, 42, 88];
console.log(arr.fooFilter(x => x % 2 === 0));


//Implementation of reduce

function reducer(array, callback, initializer) {
    let accumulator = (initializer === undefined) ? 0 : initializer;

    for (let i = 0; i < array.length; i++) {
        accumulator = callback(accumulator, array[i]);
    }

    return accumulator;
}

const arr1 = [2, 3, 4];

const sum = (a, b) => a + b;

console.log(reducer(arr1, sum, 1));


//Implementation of forEach

const arr2 = [2, 3, 4];
Array.prototype.forEach = function (callback) {
    if (callback && typeof callback === 'function') {
        for (var i = 0; i < this.length; i++) {
            callback(this[i], i, this);
        }
    }
};

arr2.forEach(number => console.log(number));