/**
 * [].filter(); 
 * function is bsically use to filter
 */

const array = [5,1,3,2,6];

//find odd element from array
function odd(x){
    return x%2;
}
//find even element
function isEven(x){
    return x%2==0;
}
//greater than function 4
function GreaterThan4(x){
    return x>4;
}
    
//const outputArr = array.filter(GreaterThan4);

// we acn write function call as follow
const outputArr = array.filter((x)=>x<4);

console.log(outputArr);