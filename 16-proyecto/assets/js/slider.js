window.addEventListener("load", () => {
    let btnPrev = document.querySelector(".slider_btn-prev")
    let btnNext = document.querySelector(".slider_btn-next")
    let slides = document.querySelectorAll(".slides_item")

    let counter = 0
    let allSlides = slides.length

    btnNext.addEventListener("click", () => {
        counter++
        if (counter >= allSlides) {
            counter = 0
        }
        activeSlide(counter)
    })

    btnPrev.addEventListener("click", () => {
        counter--
        if (counter < 0) {
            counter = allSlides - 1
        }
        activeSlide(counter)
    })

    let activeSlide = (index) => {
        clearActives()

        slides[index].classList.add("slides_item--active")
    }

    let clearActives = () => {
        slides.forEach(slide => {
            slide.classList.remove("slides_item--active")
        })
    }
})