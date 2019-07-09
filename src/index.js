document.addEventListener("DOMContentLoaded", () => {

  document.addEventListener('submit', function(e) {

    // Prevent Refresh
    e.preventDefault()

    // Retrieve Description submitted by user

    const desc = document.getElementById("new-task-description").value
    const time = document.getElementById("new-task-time").value
    const prior = document.getElementById("priority-answer").value

    // Add it to HTML/Page

    const ulTag = document.querySelector("UL")
    ulTag.innerHTML += `<li class = "new-li">
    ${desc}, ${time} minutes, ${prior} <input type="button" name="delete-this-task" class="delete-this-task" value="X">
    </li>`

    // Change Color based on Priority Selected

    const allLI = document.getElementsByClassName("new-li")

    for (let i =0; i < allLI.length; i++) {
      if (allLI[i].innerText.includes("High")){
        allLI[i].style.color = "red";
      }
      else if (allLI[i].innerText.includes("Medium")) {
        allLI[i].style.color = "orange";
      }
      else {
        allLI[i].style.color = "green";
      }
    }
    //debugger
  })

  // Functionality for remove button

  document.addEventListener('click', function(e){
    if (e.target.className === "delete-this-task") {
      e.target.parentElement.remove()
    }
  })

})
