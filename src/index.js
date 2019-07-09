document.addEventListener("DOMContentLoaded", () => {
  // form tag
  const formTag = document.querySelector("form")
  // input box tag
  const inputTag = document.querySelector("input")

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

    // changes inner text to todo, then appends to document ul tag
    newLi.innerText = toDo
    ulTag.appendChild(newLi)
  })


});
