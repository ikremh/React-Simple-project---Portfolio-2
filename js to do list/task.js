const inputtaske=document.getElementById("input-text")
const taskelist=document.getElementById("task-list")
const btn=document.querySelector(".btn")
let taskarray=[];

function addtaske(){
let taskvalue=inputtaske.value;
if(!taskvalue){
    alert("you must add value")
}else{
let li =document.createElement("li");
let span=document.createElement("span");
li.innerHTML=taskvalue;
taskelist.appendChild(li);
span.innerHTML="&times;";
li.appendChild(span);
}

  let task=inputtaske.value;
    taskarray.push(task);
    console.log(taskarray);
    inputtaske.value="";
savetask();
}


btn.addEventListener("click",addtaske);


taskelist.addEventListener("click",function(e){
  
if(e.target.tagName ==="LI"){

   e.target.classList.toggle("check");
   savetask()
}else if(e.target.tagName==="SPAN"){

e.target.parentElement.remove();
savetask()
}


});

inputtaske.addEventListener("keydown",function(e){
if(e.key==="Enter"){
    addtaske();


}

});

function savetask(){
localStorage.setItem("lists",taskelist.innerHTML);

}
function load(){
    taskelist.innerHTML=localStorage.getItem("lists")

}

load();
