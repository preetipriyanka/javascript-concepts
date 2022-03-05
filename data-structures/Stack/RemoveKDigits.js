// Given a non-negative integer num represented as a 
// string, remove k digits from the number so that the 
// new number is the smallest possible.


const removeKdigits = (num, k) => {
    if (k === num.length) return '0';
    if (k === 0) return num;
    
    let result = '';
    let removals = k;
    for (let i=0; i<num.length; ++i) {
        if (num[i] < num[k] && removals > 0) {
            result += num[i]
        } 
        else --removals;

        if (i > k) result += num[i];
    }
    
    let j = 0;
    while (result[j] === "0") result = result.substr(1);
    
    return result;
}

let str = "765028321";
let k = 5;

console.log(removeKdigits(str, k))

removeKdigits()