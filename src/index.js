document.addEventListener("DOMContentLoaded", () => {
  // your code here

  let elements = []

  document.querySelector('form').addEventListener("submit", function(e) {
    e.preventDefault()

    const task = e.target.children[1].value
    const color = e.target.children[2].value
    const date = e.target.children[3].value

    const ulTag = document.getElementById("tasks")
    const liTag = document.createElement("li")

    liTag.innerHTML = `${task} (${date}) <button>X</button>`
    liTag.style.color = color
    if (color === "red") {
      liTag.dataset.priority = 1
    } if (color === "yellow") {
      liTag.dataset.priority = 2
    } if (color === "green") {
      liTag.dataset.priority = 3
    }

    ulTag.appendChild(liTag)
    e.target.reset()
  })

  document.addEventListener("click", function(e) {
    if (e.target.tagName === "BUTTON") {
      if (e.target.parentElement.tagName === "LI") {
        e.target.parentElement.remove()
      }
    }
  })

  document.getElementById("priority").addEventListener("click", function(e) {
    let arr = Array.prototype.slice.call(document.querySelectorAll("li"))
    sorted_arr = arr.sort(function(a,b) {
      return a.dataset.priority - b.dataset.priority
    })
    ulTag = document.getElementById("tasks")
    for (let i = 0; i < sorted_arr.length; i++) {
      ulTag.appendChild(sorted_arr[i])
    }
  })
});
