const addtask = document.getElementById('add-task')

const items = document.querySelectorAll('.item')

const todoBoard = document.getElementById("todo-board")

addtask.addEventListener('click', () => {



    let input = prompt('What is the task')

    if (!input) return

     const taskCard =  document.createElement('p')

     taskCard.classList.add('item')
     taskCard.textContent = input
     
     todoBoard.appendChild(taskCard)

     taskCard.setAttribute('draggable',"true")
     
     
    taskCard.addEventListener('dragstart', () =>{
        taskCard.classList.add('flying')
      })
  
      taskCard.addEventListener('dragend',() =>{
          taskCard.classList.remove('flying')
      })
    

        
})


items.forEach( (item) =>{

    item.addEventListener('dragstart', () =>{
      item.classList.add('flying')
    })

    item.addEventListener('dragend',() =>{
        item.classList.remove('flying')
    })
    
})



const allBoard = document.querySelectorAll(".board")

allBoard.forEach( (board) =>{

    board.addEventListener('dragover',() => {

        const flyingElement = document.querySelector('.flying')

        // console.log(board, "Kuch gya uper se ", flyingElement)

        board.appendChild(flyingElement)
    })
})

