/**
 * [].reduce(); 
 * reduce function basically use for return slingle value from that array we use that function
 */

const arrEle = [5,1,3,2,6];

// we find put th esum of allthe element
function findSum(arr)
{  
    let sumCount = 0;
    for(let i=0; i< arr.length ; i++){
        sumCount = sumCount + arr[i];
    }
    return sumCount;
}
// console.log("sum count");
// console.log(findSum(arrEle));

const outputSum = arrEle.reduce(function(acc,curr){
    acc = acc + curr;
    return acc;
},0);

// console.log(outputSum);

const users=[
    {fristName:"Akshay",lastName:"sani",age:26},
    {fristName:"Donal",lastName:"Trump",age:75},
    {fristName:"Elon",lastName:"Mask",age:50},
    {fristName:"Dipika",lastName:"padukon",age:26}
]

// acc = {26:2,75:1,50:1}

const outputAge = users.reduce(function(acc,curr){
    if(acc[curr.age])
    {
        acc[curr.age] = ++acc[curr.age];
    }
    else{
        acc[curr.age] = 1;
    }
    return acc;
},{});

const userless30 = users.filter(x=>x.age>30).map(x=>x.fristName);

console.log(outputAge);
console.log(userless30);