function printMaxActivities(s, f, n) {
  let i, j;
  console.log("Following activities are selected : n");

  // The first activity always gets selected
  i = 0;
  console.log(i + " ");

  // Consider rest of the activities
  for (j = 1; j < n; j++) {
    if (s[j] >= f[i]) {
      console.log(j + " ");
      i = j;
    }
  }
}

let s = [1, 3, 0, 5, 8, 5];
let f = [2, 4, 6, 7, 9, 9];
let n = s.length;
printMaxActivities(s, f, n);
