let obj = {
    name: 'Jack',
  };
  
  let myFunc = function (id, city) {
    console.log(`${this.name}, ${id}, ${city}`);  // id will be undefined
  };
  
  // Accepting any number of arguments passed to myBind
  Function.prototype.myBind = function (obj, ...args) {
    let func = this;
    return function () {
      func.apply(obj, [...args]);
    };
  };
  
  let newFunc = myFunc.myBind(obj, 'a_random_id')
  newFunc('New York') // Jack, a_random_id, undefined