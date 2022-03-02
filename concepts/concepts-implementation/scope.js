function foo() {
    // let i;
    for(var i =0; i<=5; i++) {
        setTimeout(function() {
            console.log(i);
        }, 0)
    }
}

foo();