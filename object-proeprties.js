//object
var computer = {
    price: 29000,
    storage: '156 gb',
    processor: 'Intel i7',
    color: "black"


}

console.log(computer["storage"]);

var priceProperty = "price"
//change the object property
computer.price= 400000;

// change propery different ways
computer["price"] = 500000;
computer[priceProperty] = 2000; // if the value stay in variable the we can direct put it in third baraket.
// set object property value

