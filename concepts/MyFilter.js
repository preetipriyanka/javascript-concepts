Array.prototype.myFilter = function(callback) {
    const filterArr = [];
    for(let index = 0; index<this.length; index++) {
        if(!!callback(this[index], index, this)) {
            filterArr.push(this[index]);
        }
    }
    return filterArr;
}

const names = ['Zakir', 'Rashid', 'Harish'];
const filterNames = names.myFilter(name => name !== 'Zakir');

console.log(filterNames) // [ 'Rashid', 'Harish' ]