document.addEventListener("DOMContentLoaded", () => {
	tasks = []
	const ulTag = document.querySelector('ul')

	document.querySelector('form').addEventListener('submit', function(e){
   		e.preventDefault()

   		//Store task and priority
   		const task = e.target.children[1].value
   		const priority = e.target.children[3].value
   		const deadline = e.target.children[5].value

   		//Add to ulTag and push to tasks array
   		ulTag.innerHTML += `<li>${task} - Due: ${deadline}<button id="delete-task">X</button><hidden></li>`
   		ulTag.children[ulTag.children.length-1].dataset.priority = priority
   		e.target.children[1].value = ""
   		tasks.push(ulTag.children[ulTag.children.length-1])

   		//Handle text styling according to priority
   		if (priority === "3") {
   			ulTag.children[ulTag.children.length-1].style.color = "red"
   		} else if (priority === "2") {
   			ulTag.children[ulTag.children.length-1].style.color = "yellow"
   		} else {
   			ulTag.children[ulTag.children.length-1].style.color = "green"
   		}
	})

	document.addEventListener('click', function(e){
		
		if(e.target.tagName === "BUTTON"){
			//Handles delete-task button
			if (e.target.id === "delete-task"){
				e.target.parentElement.remove()
			} else {
				//Handles asc and desc buttons
				sorted = tasks.sort(function (a, b) {
					return a.dataset.priority - b.dataset.priority;
				})

				if (e.target.id === "desc") {
					sorted.reverse()
				}

				//Clears existing ulTag and updates with sorted array
				ulTag.innerHTML = ""
				for (let i = 0; i < sorted.length; i++){
					ulTag.appendChild(sorted[i])
				}
			}
		}
	})
});
