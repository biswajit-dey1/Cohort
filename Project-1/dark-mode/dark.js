const themeBtn = document.getElementById("toggleButton")
const body = document.getElementById("body")
const bulbOn = document.getElementById("bulb")
const statusBtn = document.querySelector(".switch-status")
console.log(statusBtn)


themeBtn.addEventListener("click", () => {

    if (body.classList.contains("dark-mode")) {

        body.classList.remove("dark-mode");
        bulbOn.classList.add("off");
        statusBtn.textContent = "Status: Off";
        themeBtn.textContent = "Turn On"
       
    } else {

        body.classList.add("dark-mode")
        bulbOn.classList.remove("off")
        statusBtn.textContent = "Status: On"
        themeBtn.textContent = "Turn Off"
    }
})