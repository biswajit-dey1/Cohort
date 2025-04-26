
const input = document.getElementById("input-val")
const thought = document.getElementById("input-tht")
const button = document.getElementById("btn")
const container_box = document.getElementById("container")
const reset_btn = document.getElementById("reset")
const feedback = document.getElementById("feedback")


  button.addEventListener("click", () => {
   const heading_4 = document.createElement("h4")
   heading_4.textContent = input.value

    const heading_6 =  document.createElement("h6")
    heading_6.textContent = thought.value

    const para = document.createElement("p")
    para.textContent = feedback.value

  container_box.appendChild(heading_4)

  container_box.appendChild(heading_6)
  container_box.appendChild(para)

  input.value = ""
  thought.value = ""
  feedback.value = ""

  heading_4.classList.add('head_4')
  heading_6.classList.add('head_6')
  para.classList.add('text_para')


  

 

  })


  console.log(container_box)












// reset_btn.addEventListener("click", () =>{
 
//    container_box.innerHTML = ""
// })




