// A celebrity is a person who is known to all but does
// not know anyone at a party. If you go to a party of N
// people, find if there is a celebrity in the party or
// not.A square NxN matrix M[][] is used to represent
// people at the party such that if an element of row i and
// column j  is set to 1 it means ith person knows jth
// person. Here M[i][i] will always be 0.

// Example 1:

// Input:
// N = 3
// M[][] = {{0 1 0},
//          {0 0 0},
//          {0 1 0}}
// Output: 1
// Explanation: 0th and 2nd person both
// know 1. Therefore, 1 is the celebrity.

// Example 2:

// Input:
// N = 2
// M[][] = {{0 1},
//          {1 0}}
// Output: -1
// Explanation: The two people at the party both
// know each other. None of them is a celebrity.

var MATRIX = [
  [0, 0, 1, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 0],
  [0, 0, 1, 0],
];

// Returns true if a knows
// b, false otherwise
function knows(a, b) {
  var res = MATRIX[a][b] == 1 ? true : false;
  return res;
}

// Returns -1 if celebrity
// is not present. If present,
// returns id (value from 0 to n-1).
function findCelebrity(n) {
  var st = new Array();
  var c;

  // Step 1 :Push everybody
  // onto stack
  for (var i = 0; i < n; i++) {
    st.push(i);
  }

  while (st.length > 1) {
    // Step 2 :Pop off top
    // two persons from the
    // stack, discard one
    // person based on return
    // status of knows(A, B).
    var a = st.pop();
    var b = st.pop();

    // Step 3 : Push the
    // remained person onto stack.
    if (knows(a, b)) {
      st.push(b);
    } else st.push(a);
  }

  // If there are only two people
  // and there is no
  // potential candidate
  if (st.length == 0) return -1;

  c = st.pop();

  // Step 5 : Check if the last
  // person is celebrity or not
  for (i = 0; i < n; i++) {
    // If any person doesn't
    // know 'c' or 'a' doesn't
    // know any person, return -1
    if (i != c && (knows(c, i) || !knows(i, c))) return -1;
  }
  return c;
}

// Driver Code
var n = 4;
var result = findCelebrity(n);
if (result == -1) {
  console.log("No Celebrity");
} else console.log("Celebrity ID " + result);
