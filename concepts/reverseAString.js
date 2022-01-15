function reverseString(str) {
  let res = "";
  for (let i = str.length - 1; i >= 0; i--) {
    res += str[i];
  }
  console.log(res);
}

reverseString("Priyanka");

function reverseString(str) {
  return str === "" ? "" : reverseString(str.substr(1)) + str.charAt(0);
}
console.log(reverseString("hello"));
