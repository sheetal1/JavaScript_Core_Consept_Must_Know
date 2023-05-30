//then this implemetation is bubbling event if 3 parameter flase
//then this implemetation is capturing event if 3 parameter true
// if we want to stop propogation we can call e.stopprpogation method
window.onload=function(){
    var grnd = document.getElementById("#grandparent");
    grnd.addEventListener("click", grandClicked, true);

    var parent = document.getElementById("#parent");
    parent.addEventListener("click", ParentClicked, true);

    var child = document.getElementById("#child");
    child.addEventListener("click", childClicked, true);
}

function grandClicked(){
    console.log("Grandparent div is click !");
}

function ParentClicked(){
    console.log("parent div is click!");
}

function childClicked(){
    console.log("child div click!");
}


