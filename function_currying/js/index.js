//let create function for multiply 

let multiply =function(x,y){
    console.log(x*y);
}

//let's create function multply by two
// when we call bin method it return copy of multiply method
//we are setting value 2 to x argument of the function multiply
let multiplybyTwo = multiply.bind(this,2);

multiplybyTwo(5);

//now we wanted to creat fuction multiply by 3

let multiplybyThree = multiply.bind(this,3);

multiplybyThree(20);

// implentation of curryring with help of closure
let addition = function(x){
    return function(y){
        console.log(x+y);
    }
}

let addNumebrten = addition(10);
addNumebrten(80);