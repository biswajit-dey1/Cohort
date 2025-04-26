

let rightClickedCard = null

function addTask(columnId) {

    const input = document.getElementById(`${columnId}-input`)
    const taskText = input.value


    const taskElement = createElement(taskText)
   
    taskElement.classList.add('card')

    document.getElementById(`${columnId}-tasks`).appendChild(taskElement)

    input.value = "";

}


function createElement(taskText) {

    const element = document.createElement("div")
    element.innerHTML = `<span>${taskText}</span>`
    
    element.setAttribute("draggable", true)
    element.addEventListener('dragstart', function dragStart(){
        element.classList.add('draging')
    }
    )
    element.addEventListener('dragend', function dragEnd(){
        element.classList.remove('draging')
    }
    )
    rightClickedCard = element
  
    element.addEventListener('contextmenu', function (event) {
    event.preventDefault()
  
    showContextMenu(event.pageX, event.pageY)

    })


    return element
}




const contextMenu = document.querySelector('.context-menu')

function showContextMenu(x, y) {
    contextMenu.style.top = `${y}px`
    contextMenu.style.left = `${x}px`
    contextMenu.style.display = "block"
}


document.addEventListener("click", () => {
    contextMenu.style.display = "none";
});


const columns = document.querySelectorAll('.tasks')
// console.log(columns)

columns.forEach( (column) => {

    column.addEventListener('dragover', function dragOver(e){
        e.preventDefault()
        const dragcard = document.querySelector(".draging")
        console.log(column)
            column.appendChild(dragcard)
            console.log(column)
         })
})




function deleteTask(){
    console.log(rightClickedCard)
    rightClickedCard.remove()
}

function editTask(){
    
   let newTask = prompt("what is editable", rightClickedCard.textContent)
   rightClickedCard.textContent = newTask
}