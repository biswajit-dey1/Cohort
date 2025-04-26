/**
 * Write your challenge solution here
 */
// Image data
const images = [
    {
        url: 'https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        caption: 'Beautiful Mountain Landscape',
    },
    {
        url: 'https://plus.unsplash.com/premium_photo-1690576837108-3c8343a1fc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        caption: 'Ocean Sunset View',
    },
    {
        url: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        caption: 'Autumn Forest Path',
    },
    {
        url: 'https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        caption: 'Urban City Skyline',
    },
];

const nextbtn = document.querySelector('#nextButton')

const prevbtn = document.querySelector('#prevButton')

function initCarousel() {
    const carouselTrack = document.querySelector('.carousel-track');
    carouselTrack.innerHTML = images.map(img => 
        `<div class="carousel-slide" style="background-image: url('${img.url}')"></div>`
    ).join('');
    console.log(carouselTrack.innerHTML);
    
}

let index = 0


function updateSlide() {
  

    const carouselTrack = document.querySelector('.carousel-track');
    carouselTrack.style.transform = `translateX(-${index * 100}%)`;

   
}

window.onload = function () {
    initCarousel();
    updateSlide()
};

function nextSlide() {
    index = (index + 1) % images.length;
    updateSlide()

}


function previousSlide() {
    index = (index - 1 + images.length) % images.length;
    updateSlide()
}

nextbtn.addEventListener('click', nextSlide)
prevbtn.addEventListener('click', previousSlide)







const autoPlay = document.querySelector('#autoPlayButton')
const timer = document.querySelector('#timerDisplay')

autoPlay.addEventListener('click', () => {

    setInterval(nextSlide, 3000)

    function increaseCounter() {
        let counter = 3

        return () => {
            counter--
            timer.textContent = `Autoplay start in ${counter}`
            if (counter <= 0) {
                clearInterval(timerId)
            }
        }

    }
    let helo = increaseCounter()

    let timerId = setInterval(helo, 1000)
})






