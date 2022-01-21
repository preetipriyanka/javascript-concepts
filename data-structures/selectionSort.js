const swap = (arr, x, y) => {
  let temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
};

const print = (arr, n) => {
  let i;
  for (i = 0; i < n; i++) {
    console.log(arr[i] + " ");
  }
};

const selectionSort = (arr, n) => {
  var i, j, min_index;

  for (i = 0; i < n; i++) {
    for (j = i + 1; j < n; j++) {
      min_index = i;

      if (arr[j] < arr[min_index]) min_index = j;
      swap(arr, min_index, i);
    }
  }
};

var arr = [64, 25, 12, 22, 11];
var n = 5;
selectionSort(arr, n);
console.log("Sorted array: ");
print(arr, n);
