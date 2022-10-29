// let input = document.getElementById("myInput")
// // console.log(input)

// let todoList = document.querySelector("#list")
// // console.log(todoList);

// let list = [];


// let todoApp = {
//     addFun(){
//         if (input.value) {
//             list.push(input.value)
//             input.value = ""
            
//         }
//         this.myFun()
//     },
//     myFun(){
//         todoList.innerHTML = ""
//         list.forEach((value, index) =>{
//             todoList.innerHTML += `<p class="myList">${value}
//             <button id="x-btn" onclick="todoApp.delete(${index})">
//             <i class='bx bxs-message-square-x'></i></button></p>` 
//         })
//     },
//     delete(index){
//         list.splice(index, 1)
//         this.myFun()
//     },
//     clear(){
//         list.splice(0, list.length)
//         this.myFun()
//     }
// }


// 1. ======================================================================================================

let input = document.getElementById("myInput");
// console.log(input);
let todolsit = document.querySelector("#list");
// console.log(todolsit);

let list = []


let todoApp = {
    addFun(){
        if(input.value){
            list.push(input.value)
            input.value = ""
        }
        this.myFun()
    },
    myFun(){
        todolsit.innerHTML = ""
        list.forEach((value, index)=>{
            todolsit.innerHTML += `<p class="myList">${value}
            <button id="x-btn" onclick="todoApp.delete(${index})">
            <i class='bx bxs-message-square-x'></i></button</p>`

        })
    },
    delete(index){
        list.splice(index, 1)
        this.myFun()
    },
    clear(){
        list.splice(0, list.length)
        this.myFun()
    }
}
