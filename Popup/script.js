
const button = document.getElementById('btn')
const body = document.getElementById('body')



button.addEventListener('click', (e) => {


  const input_box = document.createElement('div')

  input_box.innerHTML = `

   <div id="delete">
     <img src="delete.png" alt="">
   </div>

    <label class="label" for="">Enter Name:</label>
    <input class="inp" type="text">

    <label  class="label"  for="">Enter Color:</label>
    <input  class="inp" type="text">
    <button id="input-Btn">Add </button>

    `
  input_box.classList.add('input')

  body.appendChild(input_box)

  const remove = document.getElementById('delete')
 

 remove.addEventListener('click', () =>{
   input_box.remove()
 })


  const addInputbtn = document.getElementById('input-Btn')
  // console.log(addInputbtn)

  addInputbtn.addEventListener('click', () => {

    const divBoard = document.createElement('div')

const inputInner = document.querySelectorAll('.inp')


const value = Array.from(inputInner).map( input => input.value )




    divBoard.innerHTML = `

        <h2>${value[0]}</h2>

            <div class="para">
                <p>${value[1]}</p>
            </div>
    
      
      `
    // console.log(divBoard)
    divBoard.classList.add('board')

    const containerBoard = document.querySelector('.container')
    containerBoard.appendChild(divBoard)

  })







})