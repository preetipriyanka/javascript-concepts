function sumArray(arr) {
    var sum=0;
    for(var i =0; i<arr.length; i++) {
        if (typeof arr[i] == "number") {
            sum += arr[i];
        } else if(arr[i] instanceof Array) {
            sum += sumArray(arr[i]);
        }
    }
    return sum;
}

var arr = [1, [1,2], 3, 4, [5,6]];

console.log(sumArray(arr));
