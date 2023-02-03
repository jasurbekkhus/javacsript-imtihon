const items = document.querySelectorAll(".item")
const phone = document.querySelector(".phone")
const life = document.querySelector(".life")

const buttons = document.querySelectorAll("[data-carousel-button]")

const smart = document.querySelector(".smart")

items[0].addEventListener("mouseenter", ()=>{
    phone.style.height = "150px"
})
items[0].addEventListener("mouseleave", ()=>{
    phone.style.height = "0px"
})


items[1].addEventListener("mouseenter", ()=>{
    smart.style.height = "190px"
})
items[1].addEventListener("mouseleave", ()=>{
    smart.style.height = "0px"
})




items[2].addEventListener("mouseenter", ()=>{
    life.style.height = "190px"
})
items[2].addEventListener("mouseleave", ()=>{
    life.style.height = "0px"
})


buttons.forEach(button =>{
    button.addEventListener("click", () =>{
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button
        .closest("[data-carousel]")
        .querySelector('[data-slides]')

        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
})