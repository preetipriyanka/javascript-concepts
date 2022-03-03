function delay() {
    return new Promise(resolve => setTimeout(resolve, 2000));
}

async function delayedLog(item) {
    await delay();
    console.log(item);
}

async function processArray(array) {
    array.forEach(element => {
        await delayedLog(element);
    });
}

processArray([1,2,3,4])