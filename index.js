document.addEventListener('DOMContentLoaded', function(){

    form = document.querySelector('form')
    todoList = document.querySelector('ul')
    dateLabel = document.createElement('label')
    dateLabel.innerHTML = " Due By: "
    sort = document.getElementsByClassName('button3')[0]
    sortArr = []
    sortedArr = []

form.addEventListener('submit', function(event){
event.preventDefault()
newList = document.createElement("li");
newButton = document.createElement("button");
newButton.innerHTML = 'X'
newButton.className = 'button1'
newButton2 = document.createElement("button");
newButton2.innerHTML = 'Procrastinate'
newButton2.className = 'button2'
newSpan = document.createElement("span");
newSpan.innerHTML = form.children[5].value
newList.innerHTML = form.children[1].value
newList.appendChild(newButton)
newList.appendChild(newButton2)
newList.className = form.children[3].value
newList.innerHTML += dateLabel.outerHTML
newList.innerHTML += newSpan.outerHTML
todoList.innerHTML +=  newList.outerHTML
sortArr.push(newList)
})

todoList.addEventListener('click', function(event){
    if (event.target.className === "button1")
    {   
        event.target.parentElement.remove()
    }
})

todoList.addEventListener('click', function(event){
    if (event.target.className === "button2")
    {   
        event.preventDefault()
        let newDate = window.prompt("New Due Date",`${event.target.parentElement.children[3].textContent}`);
        event.target.parentElement.children[3].textContent = newDate
       
    }
})

sort.addEventListener('click', function(event){
             
 
        event.preventDefault()
        for (i = 0; i < sortArr.length; i++) { 
            if (sortArr[i].className === "High")
            {sortedArr.push(sortArr[i])}}
        for (i = 0; i < sortArr.length; i++) { 
            if (sortArr[i].className === "Medium")
            {sortedArr.push(sortArr[i])}}
        for (i = 0; i < sortArr.length; i++){ 
            if (sortArr[i].className === "Low")
            {sortedArr.push(sortArr[i])}}
        
            event.target.parentElement.children[2].innerHTML = ""
     
         for (i = 0; i < sortedArr.length; i++){
         event.target.parentElement.children[2].innerHTML += sortedArr[i].outerHTML}


        
    })
    



})