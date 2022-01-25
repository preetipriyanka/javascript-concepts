function printMaxActivities(start, finish) {
  console.log("Following Activities are selected: ");
  let i, j;

  i = 0;
  console.log(i + " ");

  for (j = 1; j < start.length; j++) {
    if (start[j] >= finish[i]) {
      console.log(start[j]);
      i = j;
    }
  }
}

let start = [1, 3, 0, 5, 8, 5];
let finish = [2, 4, 6, 7, 9, 9];
printMaxActivities(start, finish);
