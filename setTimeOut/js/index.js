// console.log("start");

// setTimeout(function cb(){
//     console.log("callback");
// },5000);

// console.log("End");
/*Output:
start
End
callback
*/
// console.log("start");

// setTimeout(function cb(){
//     console.log("callback1");
// },5000);

// console.log("End");

// let startDate = new Date().getTime();
// let endDate = startDate;
// while(endDate <startDate+10000){
//     endDate= new Date().getTime();
// }

// console.log("While Expired hear");
/*Output:
start
End
While Expired hear
callback
*/

console.log("start");

setTimeout(function cb(){
    console.log("callback");
},0);

console.log("End");

/*Output:
start
End
callback
*/