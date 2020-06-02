
var input =document.getElementById("item");
var btn = document.getElementById("add");
var list = document.getElementById("list");

btn.addEventListener("click",addItem);
input.addEventListener("keypress",addItemv2)

function addItem(){
    var element = document.createElement("li");
    var ckbx=document.createElement("input");
    ckbx.type="checkbox";
    list.appendChild(ckbx);
    element.appendChild(document.createTextNode(input.value));
    list.appendChild(element);
    var del_btn = document.createElement("button");
    del_btn.appendChild(document.createTextNode("Delete"));
    list.appendChild(del_btn);
    input.value="";
    del_btn.addEventListener("click",remItem);
    function remItem(){
        element.style.display="none";
        del_btn.style.display="none";
        ckbx.style.display="none";
    }

}

function addItemv2(event) {
    if (event.keyCode == 13) {
        var element = document.createElement("li");
    var ckbx=document.createElement("input");
    ckbx.type="checkbox";
    list.appendChild(ckbx);
    ckbx.addEventListener('change',strike)
    element.appendChild(document.createTextNode(input.value));
    list.appendChild(element);
    var del_btn = document.createElement("button");
    del_btn.appendChild(document.createTextNode("Delete"));
    list.appendChild(del_btn);
    input.value="";
    del_btn.addEventListener("click",remItem);
    function remItem(){
        element.style.display="none";
        del_btn.style.display="none";
        ckbx.style.display="none";
    }
    function strike(){
         element.style.textDecoration="line-through"
    }
    }}