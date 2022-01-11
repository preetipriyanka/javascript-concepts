var obj = {
    'homes': [{
            "home_id": "1",
            "price": "925",
            "sqft": "1100",
            "num_of_beds": "2",
            "num_of_baths": "2.0",
        }, {
            "home_id": "2",
            "price": "1425",
            "sqft": "1900",
            "num_of_beds": "4",
            "num_of_baths": "2.5",
        },
    ]
};


var newArray = obj.homes.filter(function(el) {
    return el.price <= 1000 &&
         el.sqft >= 500 &&
         el.num_of_beds >= 2 &&
         el.num_of_baths >= 1.5; 
})

console.log(newArray);