let openPopup = document.getElementById('openMenu')
let closePopup = document.getElementById('closePopup')
let overlay = document.querySelector('.overlay')


openPopup.addEventListener('click', ()=>{
    overlay.classList.toggle('hidden')
})
closePopup.addEventListener('click', ()=>{
    overlay.classList.toggle('hidden')
})



// SLIDER

document.addEventListener("DOMContentLoaded", function() {

    
    const sliderImg = document.getElementById('slider__img')
    

    let images = [
        'media/PS1.png',
        'media/PS2.png',
        'media/PSP.png',
        'media/PS3.png',
        'media/PSVITA.png',
        'media/PS4.png',
        ];


    let currentIndex = 0
    sliderImg.src = images[currentIndex]

  


    function nextImage() {

        currentIndex++

        if (currentIndex >= images.length ) {
            currentIndex = 0
        }

        sliderImg.src = images[currentIndex]
    }


    function prevImage() {
        currentIndex--

        if(currentIndex < 0) {
            currentIndex = images.length - 1
        }
        sliderImg.src = images[currentIndex]
    }


    document.getElementById('next__btn').addEventListener('click', nextImage)
    document.getElementById('prev__btn').addEventListener('click', prevImage)
})

