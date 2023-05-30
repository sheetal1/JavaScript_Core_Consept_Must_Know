/*Topic:-Higher order Function
  Function which take  another function as argument and return  function 
  from it , It's known as 'Higher order function'
 */

  const radius =[3,1,2,4];

  const calculateArea = function(radius){
      const output =[];
      for(let i =0 ;i < radius.length;i++){
        output.push(Math.PI*radius[i]*radius[i]);
      }
      return output;
  }

//   console.log(calculateArea(radius));

  const calculateCuercumfernace = function(radius){
    const output =[];
    for(let i =0 ;i < radius.length;i++){
      output.push(2*Math.PI*radius[i]);
    }
    return output;
 }

//  console.log(calculateCuercumfernace(radius));

 const calculateDaimeter = function(radius){
    const output =[];
    for(let i =0 ;i < radius.length;i++){
      output.push(radius[i]*2);
    }
    return output;
 }

//  console.log(calculateDaimeter(radius));

