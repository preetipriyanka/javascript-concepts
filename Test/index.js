for (var i = 0; i < 5; i++) {
    var btn = document.createElement('button');
    btn.appendChild(document.createTextNode('Button ' + i));
    btn.addEventListener('click', function(){ console.log(i); });
    document.body.appendChild(btn);
}

// // if(!Math.trunc) {
// //     Math.trunc = function(number) {
// //         return number < 0? Math.ceil(number): Math.floor(number);
// //     }
// // }

// // let y = {}

// // let obj = {

// // }
// // let x = y.x.bind(obj)

// const a = () => {
//     const [data, setData] = React.useState("")
// }