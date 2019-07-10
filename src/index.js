document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form")
  form.addEventListener('submit', function(e){
    e.preventDefault()
    const description = e.target.children[1].value
    const priority = e.target.children[4].value
    let color;
    if (priority === "high"){
      color = "red"
    } else if (priority === "medium") {
      color = "#f5ce42"
    } else {
      color = "#42f54b"
    }

    const ulTag = document.querySelector("ul")

    let liTag = document.createElement('li')
    liTag.innerText = `${description} `
    liTag.style.color = color

    let hiddenDesc = document.createElement("input")
    hiddenDesc.setAttribute("type", "hidden");
    hiddenDesc.setAttribute("name", "description")
    hiddenDesc.setAttribute("value", description)
    liTag.appendChild(hiddenDesc)

    let hiddenPriority = document.createElement("input")
    hiddenPriority.setAttribute("type", "hidden");
    hiddenPriority.setAttribute("name", "priority")
    hiddenPriority.setAttribute("value", priority)
    liTag.appendChild(hiddenPriority)

    // let edit = document.createElement('button')
    // edit.classList.add('edit')
    // edit.innerText = "Edit Task"
    // liTag.appendChild(edit)

    let del = document.createElement('button')
    del.classList.add('delete')
    del.innerText = 'X'
    liTag.appendChild(del)

    ulTag.appendChild(liTag)
  })

  document.addEventListener('click', function(d){
    if (d.target.className == "delete") {
      let liTag = d.target.parentElement
      liTag.remove()
    }

    else if (d.target.className === "sort") {
      let sortOrder = ['high', 'medium', 'low']
      
      let priority_sort = function(a, b) {
        return sortOrder.indexOf(a.children["priority"].value) - sortOrder.indexOf(b.children["priority"].value)
      }

      let lists = Array.prototype.slice.call(document.querySelectorAll('li'))
      lists.sort(priority_sort)

      let ulTag = document.querySelector('ul')
      lists.forEach(function(elm){
        ulTag.appendChild(elm)
      }) 
    }

    // else if (d.target.className === "edit") {
    //   liTag = d.target.parentElement;

    //   let f = document.createElement("form");
    //   f.setAttribute('method',"post");
    //   f.setAttribute('action',"#");

    //   let i = document.createElement("input"); //input element, text
    //   i.setAttribute('type',"text");
    //   i.setAttribute('name',"description");
    //   i.setAttribute('value',`${liTag.children[0].value}`);

    //   let select = document.createElement("select");
    //   select.setAttribute('id',"priority");
    //   select.setAttribute('value',`${liTag.children[1].value}`);

    //   let opt1 = document.createElement("option");
    //   opt1.textContent = "High"
    //   opt1.setAttribute('value', "high")
    //   select.appendChild(opt1)

    //   let opt2 = document.createElement("option");
    //   opt2.textContent = "Medium"
    //   opt2.setAttribute('value', "medium")
    //   select.appendChild(opt2)

    //   let opt3 = document.createElement("option");
    //   opt3.textContent = "Low"
    //   opt3.setAttribute('value', "low")
    //   select.appendChild(opt3)

    //   let s = document.createElement("input"); //input element, Submit button
    //   s.setAttribute('type',"submit");
    //   s.setAttribute('value',"Submit");

    //   f.appendChild(i);
    //   f.appendChild(select);
    //   f.appendChild(s);
    //   liTag.appendChild(f);
    // }
  })

});
