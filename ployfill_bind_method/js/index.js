let printFullName = function(hometown,state,contry){
    console.log( this.fristName+" "+this.lastName+" ,"+hometown+"- "+state+" "+contry);
}

let name ={
    fristName : "Shital",
    lastName : "wankhede"
}

let printFullNameBind = printFullName.bind(name,"Dehradun");
//console.log(printFullNameBind);
printFullNameBind("Uttrakahnd","India");

//write own bind method
//for access all function this method the we need to create Function prototype so it wan used for all function.
// ...args we are passing the aregument.
Function.prototype.mybind = function(...args){
    // this is pointing to printFullName function
    let obj = this;
    params = args.slice(1);
    //now we should return function
    return function(...args2){
        //now we are calling function
        //args[0] first argument of the function
        obj.apply(args[0],[...params,...args2]);
    }

}

let printFullNameMyBind = printFullName.mybind(name,"Talegon");

printFullNameMyBind("Maharashtra","India");