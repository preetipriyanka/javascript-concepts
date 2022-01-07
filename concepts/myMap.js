Array.prototype.mymap = function(callback) {
    const resultArray = [];
    for (let i= 0; i < this.length; i++) {
        resultArray.push(callback(this[i], i, this));
    }
    return resultArray;
}

const sample = [1,2,3];
var output = sample.mymap(function(val, index, array) {
    console.log('Val: ', val, 'index: ', index, 'array: ', array);
    return val*2;
})

console.log(output);