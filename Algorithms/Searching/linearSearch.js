const search = (arr, left, right, x) => {
  let position = -1;
  while (right >= left) {
    if (arr[left] == x) {
      position = left;
      break;
    } else if (arr[right] == x) {
      position = right;
      break;
    } else {
      left++;
      right--;
    }
  }
  if (position == -1) {
    console.log("Element not found");
  } else {
    console.log("Element is at " + position + " index");
  }
};

let arr = [2, 3, 4, 10, 40];
let x = 10;
let left = 0;
let right = arr.length - 1;

// Function call
search(arr, left, right, x);
