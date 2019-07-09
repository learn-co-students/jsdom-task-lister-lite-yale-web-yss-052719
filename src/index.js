document.addEventListener("DOMContentLoaded", () => {
  // form tag
  const formTag = document.querySelector("form")
  // input box tag
  const inputTag = document.querySelector("input")

  const selectTag = document.querySelector("select")
  
  // ADD TASKS

  formTag.addEventListener("submit", function(e) {
    // prevent default behavior
    e.preventDefault();
    // grabs text from input value and stores in variable
    const toDo = inputTag.value
    // finds ul tag
    const ulTag = document.querySelector("ul")
    // makes new list element
    const newLi = document.createElement('li')

    // create delete button
    deleteButton = document.createElement('button')
    deleteButton.innerText = 'X'

    // changes inner text of li to todo and append delete button
    newLi.innerText = toDo

    // Priority Logic
    if (selectTag.value === "Low") {
      newLi.style.color = 'green'
    }
    else if (selectTag.value === "Medium") {
      newLi.style.color = 'yellow'
    }
    else if (selectTag.value === "High") {
      newLi.style.color = 'red'
    }

    newLi.appendChild(deleteButton)

    // Append toDo to unordered list
    ulTag.appendChild(newLi)

    // delete listener functionality
    deleteButton.addEventListener("click", function(e) {
      e.preventDefault();
      ulTag.removeChild(newLi)
    })

  })

});
