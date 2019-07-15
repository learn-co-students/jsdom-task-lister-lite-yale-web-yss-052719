
document.addEventListener('DOMContentLoaded', function() {

  // type a task into the input field
  // click some form of a submit button.
  // show tast on page after submit
  document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault()
// debugger
    const newTask = e.target.children[1].value

    const ulTag = document.querySelector('ul')
    const liTag = document.createElement('li')
    const deleteButton = document.createElement('button')
    deleteButton.innerText = 'X'

    liTag.innerText = `${newTask}`

    ulTag.appendChild(liTag)
    liTag.appendChild(deleteButton)

    // delete function
    deleteButton.addEventListener('click', function(e){
      ulTag.removeChild(liTag)
    })
  })

})
