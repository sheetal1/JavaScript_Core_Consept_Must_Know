/**
 * [].Map(); higher order function in java script.
 * map function use to do transformation fo the array.
 * like for example you wanted to double each and very element of the array.
 */

const arr =[5,1,3,2,6];

// double = [10,2,6,4,12];

// triple = [15,3,9,8,18];

// binary = ['101', '1', '11', '10', '110'];

function double(x){
    return x*2;
}
//here we are doing transformation of each element to double that element
const output = arr.map(double);

console.log(output);

function triple(x){
    return x*3;
}
//here we are doing trnsformation of each element to triple of that repective element
const tripleElements = arr.map(triple);

console.log(tripleElements);

function binary(x){
    return x.toString(2);
}
//here we are doing binary transformation of ecah and every elemet to the binary format.
const binaryElement = arr.map(binary);

console.log(binaryElement);


