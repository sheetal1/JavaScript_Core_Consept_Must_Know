/**
 * Following example of higher order function this is 
 * 'functional programming'
 * we abstract all functionan there are doing there own task of that 
 * respective function
 */
const radiuses =[3,1,2,4];

const area = function(radius){
    return Math.PI*radius*radius;
}

const cercumfernce = function(radius){
    return 2*Math.PI*radius;
}

const daimeter = function(radius){
    return 2*radius;
}
const calculate =  function(radius,logic){
    const output =[];
    for(let i =0 ;i < radius.length;i++){
      output.push(logic(radius[i]));
    }
    return output;
}

console.log(calculate(radiuses,area));
console.log(calculate(radiuses,cercumfernce));
console.log(calculate(radiuses,daimeter));
// calculate function is working exactly to map 
console.log(radiuses.map(area));
//we can also create calculate function like map
// this call polyfill
Array.prototype.calculateOndata = function(logic){
    const output =[];
    for(let i=0;i<this.length;i++){
        output.push(logic(this[i]))
    }
    return output
}
//now our function runing as like map
console.log(radiuses.calculateOndata(area));