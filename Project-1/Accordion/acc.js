const accordion_btn = document.querySelectorAll(".accordion-button")
const accordion_content = document.querySelectorAll(".accordion-content")
const arrowbtn = document.querySelectorAll(".arrow")

accordion_btn.forEach((btn, i) => {

    btn.addEventListener('click', () => {

        if (accordion_content[i].style.maxHeight === '0px' || !accordion_content[i].style.maxHeight) {

            accordion_content.forEach((para) => {
                para.style.maxHeight = "0px"
                // console.log(para,"para")
            })

            accordion_content[i].style.maxHeight = "200px"
            // console.log(accordion_content[i],"accordion")
        } else {
            // Collapse the accordion
            accordion_content[i].style.maxHeight = '0px';
        }
       
        arrowbtn.forEach((arrbtn,j) =>{
            // console.log(i,"from btn", i==j)
            // console.log("-------")
            // console.log(j,"from span")
            // console.log(" ")
          

            if(i===j){
                arrbtn.classList.toggle("active")
            }else{
                arrbtn.classList.remove('active')
            }
            
            // arrowbtn.classList.add("active")

        })


    })
})




