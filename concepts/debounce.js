let counter = 0;

const getData = () => {
    console.log("Fetching Data..", ++counter);
}

const debounce = function(fn, delay) {
    let timer;
    return function() {
        let context = this;
        args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            getData.apply(context, args)
        }, delay);
    }
}

const betterFunction = debounce(getData, 3000);

console.log(betterFunction());