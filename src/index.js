document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let high = document.createElement('ul')
  high.setAttribute("id", "high")
  document.querySelector('div#list').appendChild(high)
  
  let medium = document.createElement('ul')
  medium.setAttribute("id", "medium")
  document.querySelector('div#list').appendChild(medium)

  let low = document.createElement('ul')
  low.setAttribute("id", "low")
  document.querySelector('div#list').appendChild(low)


  document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault()
    console.log(e)
    let task = e.target.children[1].value
    // const todoList = document.querySelector('ul#tasks')
    let user = e.target.children[2].value
    let fontColor = e.target.children[3].value
    
    if(fontColor === "red") {
      document.querySelector('ul#high').innerHTML += `<li style="color: ${fontColor}">
      <p>${user}: ${task}</p> 
      <button>x</button>
      </li>`
    } else if (fontColor === "orange") {
      document.querySelector('ul#medium').innerHTML += `<li style="color: ${fontColor}">
      <p>${user}: ${task}</p> 
      <button>x</button>
    </li>`
    } else {
      document.querySelector('ul#low').innerHTML += `<li style="color: ${fontColor}">
      <p>${user}: ${task}</p> 
      <button>x</button>
    </li>`
    }

  })

  // delete button
  document.addEventListener('click', function(e){
    if(event.target.tagName === "BUTTON"){
      console.log(e)
      event.target.parentElement.remove()
    }
  })

  // priority
  const list = document.createElement("select")
  const form = document.querySelector('form#create-task-form')
  form.insertBefore(list, form.childNodes[5])

  let y = document.createElement("option")
  y.setAttribute("value", "")
  y.disabled = true
  var t = document.createTextNode("-- set priority --")
  y.appendChild(t)
  
  let red = document.createElement("option")
  red.setAttribute("value", "red");
  var t = document.createTextNode("High")
  red.appendChild(t)

  let orange = document.createElement("option")
  orange.setAttribute("value", "orange");
  var t = document.createTextNode("Medium")
  orange.appendChild(t)

  let green = document.createElement("option")
  green.setAttribute("value", "green");
  var t = document.createTextNode("Low")
  green.appendChild(t)

  list.appendChild(y)
  list.appendChild(red)
  list.appendChild(orange)
  list.appendChild(green)
  
  // additional input field
  const user = document.createElement('input')
  user.setAttribute("type", "text")
  user.setAttribute("id", "user")
  user.setAttribute("placeholder", "user")
  form.insertBefore(user, form.childNodes[5])

  // sort items by priority
  // let items = document.querySelectorAll('li')
  // let high = []
  // let medium = []
  // let low = []
  // for (let i=0; i<items.length; i++) {
  //   if(items[i].style.color === "red"){
  //     high.push(items[i])
  //   } else if(items[i].style.color === "orange"){
  //     medium.push(items[i])
  //   } else {
  //     low.push(items[i])
  //   }
  // }

  // edit tasks




});
