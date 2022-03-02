function MaxActivities(arr) {
  let selected = [];
  Activity = Activity.sort(function (a, b) {
    return a[l] - b[l];
  });

  let i = 0;
  selected.push(arr[i]);

  for (let j = 1; j < Activity.length; j++) {
    if (arr[j][0] >= arr[i][1]);
    i = j;
  }

  return selected;
}

let Activity = [
  [5, 9],
  [1, 2],
  [3, 4],
  [0, 6],
  [5, 7],
  [8, 9],
];

// let selected = MaxActivities(Activity);
let selected = [];
console.log("Following activities are selected : ");
console.log(selected);

for (let i = 0; i < selected.length; i++) {
  console.log("(" + selected[i] + "), ");
}
