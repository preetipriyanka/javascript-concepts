// Given an array of n integers nums, a 132 pattern is a subsequence of three integers nums[i], nums[j] and nums[k] 
// such that i < j < k and nums[i] < nums[k] < nums[j].

// Return true if there is a 132 pattern in nums, otherwise, return false.

 

// Example 1:

// Input: nums = [1,2,3,4]
// Output: false
// Explanation: There is no 132 pattern in the sequence.
// Example 2:

// Input: nums = [3,1,4,2]
// Output: true
// Explanation: There is a 132 pattern in the sequence: [1, 4, 2].
// Example 3:

// Input: nums = [-1,3,2,0]
// Output: true
// Explanation: There are three 132 patterns in the sequence: [-1, 3, 2], [-1, 3, 0] and [-1, 2, 0].

var find132pattern = function(nums) {
    if (nums === null || nums.length === 0) {
        return false;
    }
    let n = nums.length;
    let left = new Array(n).fill(null), min = Infinity;
    let right = new Array(n).fill(null);
    // fill left[]
    for (let i = 0; i < nums.length; i++) {
        min = Math.min(min, nums[i]);
        if (nums[i] > min) {
            left[i] = min;
        }
    }
    // fill right[]
    let stack = [];
    for (let i = n-1; i >= 0; i--) {
        let elem = null;
        // we keep a decreasing stack
        // this means that this while loop allows us to go through all numbers less than
        // current number on the right and hence we can get the maximum less number
        while (stack.length > 0 && nums[i] > stack[stack.length-1]) {
            if (!elem) elem = stack.pop();
            else elem = Math.max(elem, stack.pop());
        }
        right[i] = elem;
        stack.push(nums[i]);
    }
    
    for (let i = 0; i < nums.length; i++) {
        if (left[i] !== null && right[i] !== null && left[i] < right[i]) {
            return true;
        }
    }
    return false;
    // T.C: O(N)
    // S.C: O(N)
};

console.log(find132pattern([1,2,3,4]));