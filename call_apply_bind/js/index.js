
/*
let name ={
    fristName : "Shital",
    lastName : "wankhede",
    printFullName : function(){
        console.log( this.fristName+" "+this.lastName);
    }
}

let name2 ={
    fristName : "Sachin",
    lastName : "Tendukar",
}
name.printFullName();
*/

//Call() we use for borrowing function 
// which invoke the method
// pass paramter by comma seprated

/*name.printFullName.call(name2);*/

// gerally we didnot write method like this in side Object

let printFullName = function(homeTown,state){
    console.log( this.fristName+" "+this.lastName+" "+homeTown+","+state);
}

let name ={
    fristName : "Shital",
    lastName : "wankhede"
}

let name2 ={
    fristName : "Sachin",
    lastName : "Tendukar",
}

printFullName.call(name,"lonavala","Maharashtra");

//apply() method is only difrence between we pass the argument in 
// which invoke the method
// pass paramter by comma seprated encolse with in array
printFullName.apply(name2,["Dehradun","Dehli"]);

//bind() method  is method work as bind that function and return the copy of function which we can envok later
// which does'not invoke method
// pass paramter comma seprated
let printFullNameBind = printFullName.bind(name2,"lonavala","Maharashtra");
console.log(printFullNameBind);
printFullNameBind();