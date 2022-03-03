let arr = ["1", "Test User", "25", "Developer"];
let arr1 = [
  ["id", "1"],
  ["name", "Test User"],
  ["age", "25"],
  ["profession", "Developer"],
];

//Method 1: Using Object.assign() method
console.log(Object.assign({}, arr));
//{0: "1", 1: "Test User", 2: "25", 3: "Developer"}

// Method 2 Using Spread operator
console.log({ ...arr });
//{0: "1", 1: "Test User", 2: "25", 3: "Developer"}

// Method 3: Using Object.fromEntries() method
console.log(Object.fromEntries(arr1));
//{id: "1", name: "Test User", age: "25", profession: "Developer"}