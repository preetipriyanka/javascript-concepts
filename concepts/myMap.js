Array.prototype.mymap = function(callback) {
    const resultArray = [];
    for (let index = 0; index < this.length; index++) {
        resultArray.push(callback(this[index], index, this));
    }
    return resultArray;
}

const sample = [1,2,3];
var output = sample.mymap(function(val, index, array) {
    console.log('Val: ', val, 'index: ', index, 'array: ', array);
    return val*2;
})

console.log(output);