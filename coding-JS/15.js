let name = "Full Stack Tutorials, Latest Interview Questions and Answers!";

//startsWith
console.log(name.startsWith("Full")); // true
console.log(name.startsWith("full")); // false
console.log(name.startsWith("Tutorials")); // false
console.log(name.startsWith("Tutorials", 11)); // true

//endsWith
console.log(name.endsWith("Answers!")); // true
console.log(name.endsWith("answers!")); // false