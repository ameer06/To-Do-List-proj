const inputBox = document.getElementById("inputbox")
const ListContainer = document.getElementById("listcon")
function addtask(){
    if(inputBox.value == ''){
        alert("You must wirte something!");
}
else{
    let li = document.createElement("li")
    li.innerHTML = inputBox.value;
    ListContainer.appendChild(li);
    let span =document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span)

}
inputBox.value="";
savadata();

}
ListContainer.addEventListener("click", function(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("c1");
        savadata();
    }
    else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        savadata();
    }
}, false);

function savadata(){
    localStorage.setItem("data",ListContainer.innerHTML );
}
function showtask(){
    ListContainer.innerHTML = localStorage.getItem("data");
}
showtask();
