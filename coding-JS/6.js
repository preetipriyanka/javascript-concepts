function* yieldAndReturn() {
    yield 1;
    return 2;
    yield 3;
}

var myGenObj = yieldAndReturn();
console.log(myGenObj.next());
console.log(myGenObj.next());
console.log(myGenObj.next());