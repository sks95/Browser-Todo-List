// DOM Node
let input = document.querySelector(".input_box");
let ul = document.querySelector(".task-list");
let arr = [];

// check from local storage if tasks exists & recreate them
if(localStorage.getItem("allTask")){
    let stringArr = localStorage.getItem("allTask");
    arr = JSON.parse(stringArr);
    console.log(arr);

    for(let i = 0; i < arr.length; i++){
        let li = document.createElement("li");
        
        li.addEventListener("dblclick", function(e){
            li.remove();
        })
        li.innerText = arr[i];
        li.setAttribute("class", "task");
    ul.appendChild(li);
    }
}

let li = document.querySelector(".task");
input.addEventListener("keydown", function(e){
    // e object -> describe -> event
    // console.log(" some key was pressed down");
    console.log("event object", e);
    if(e.key == "Enter"){
        let task = input.value ;
        // create any html tag
        // console.log(task)
        let li = document.createElement("li");
        li.innerText = task;

        if(localStorage.getItem("allTask")){

            let stringArr = localStorage.getItem("allTask");
            arr = JSON.parse(stringArr);
        }

        arr.push(task);
        let stringArr = JSON.stringify(arr);

        localStorage.setItem("allTask", stringArr);

        li.addEventListener("dblclick", function(e){
            li.remove();
        })
        // add any attribute
        li.setAttribute("class", "task");
        ul.appendChild(li);
        input.value = "";
    }
})