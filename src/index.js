document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form")
  // console.log(form)
  
  form.addEventListener('submit', function(e){
    e.preventDefault();
    // console.log(e)
    let li = document.createElement('li')
    li.innerText = document.getElementById('new-task-description').value
    document.getElementById('tasks').append(li)

  })

  
});
