//event delegation for to add parent div it prpogate frome child div
document.querySelector("#category").addEventListener('click',(e)=>{
    console.log("category div is click !",e.target.id);
    console.log("now redirct to with respective page",e.target.id);
    window.location.href = '/'+e.target.id;
})

//event delegation
document.querySelector("#from").addEventListener('keyup',(e)=>{
    console.log("e",e);
    if(e.target.dataset.uppercase != undefined){
        e.target.value = e.target.value.toUpperCase();
    }
})



