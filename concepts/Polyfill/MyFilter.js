Array.prototype.myFilter = function(callback) {
    const filterArr = [];
    for(let i = 0; i<this.length; i++) {
        if(!!callback(this[i], i, this)) {
            filterArr.push(this[i]);
        }
    }
    return filterArr;
}

const names = ['Zakir', 'Rashid', 'Harish'];
const filterNames = names.myFilter(name => name !== 'Zakir');

console.log(filterNames) // [ 'Rashid', 'Harish' ]