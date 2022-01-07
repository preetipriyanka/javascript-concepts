function reverseInPlace(string) {
    return string.split("").reverse().join("").split(" ").reverse().join(" ")
}
console.log(reverseInPlace("My name is Priyanka"))