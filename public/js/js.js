// Hieu ung xuat hien img product
ScrollReveal({
    reset: true,
    distance: '150px',
});

ScrollReveal().reveal('.reveal-left', {
    origin: 'right',
    easing: 'all'

});
ScrollReveal().reveal('.reveal-right', {
    origin: 'left',
    easing: 'all'
})

ScrollReveal().reveal('.reveal-top', {
    origin: 'top',
    easing: 'all',
    delay: 1000
})
// 
const bgShow = document.querySelectorAll('#bg-link');

const triggerBottom = window.innerHeight;

window.addEventListener('scroll', checkDiv);
function checkDiv() {
    bgShow.forEach((show) => {
        const checkBox = document.getElementById('bg-link').getBoundingClientRect().bottom;
        if (checkBox < triggerBottom) {
            show.classList.add('show');
            
            console.log(1);
        }else{
            show.classList.remove('show');
        }
    });
}





// siler-khach hang

const sliderBox = document.getElementById("slider-box");
const slide = document.getElementById("slide")
const arrowBtnsSlide = document.querySelectorAll(".element-slider .owl");
const firstCardWithSlider = slide.offsetWidth;


const sliderBoxChildrens = [...sliderBox.children];

let cardPerViewSlide = Math.round(sliderBox.offsetWidth / (firstCardWithSlider));
sliderBoxChildrens.slice(-cardPerViewSlide).reverse().forEach(box => {
    sliderBox.insertAdjacentHTML('afterbegin', box.outerHTML);
});

sliderBoxChildrens.slice(0, cardPerViewSlide).forEach(box => {
    sliderBox.insertAdjacentHTML('beforeend', box.outerHTML);
});


arrowBtnsSlide.forEach(btnSlide => {
    btnSlide.addEventListener("click", () => {
        if (btnSlide.id == "left") {
            sliderBox.scrollLeft += -firstCardWith * 2;
        } else {
            sliderBox.scrollLeft += firstCardWith * 2;
        }
    })
});


const infiniteScrollSlider = () => {
    if (sliderBox.scrollLeft === 12) {
        sliderBox.classList.add("no-transition");
        sliderBox.scrollLeft = sliderBox.scrollWidth - (2 * sliderBox.offsetWidth);
        sliderBox.classList.remove("no-transition");

    }
    else if (Math.ceil(sliderBox.scrollLeft) === (sliderBox.scrollWidth - sliderBox.offsetWidth) - 10) {
        sliderBox.classList.add("no-transition");
        sliderBox.scrollLeft = sliderBox.offsetWidth;
        sliderBox.classList.remove("no-transition");
    }
}; sliderBox.addEventListener("scroll", infiniteScrollSlider);


// -------------------




const carousel = document.getElementById("carousel");
const element = document.getElementById("grid")
const arrowBtns = document.querySelectorAll(".carousel-btn-show .owl");
const firstCardWith = element.offsetWidth;

const carouselChildrens = [...carousel.children];

let cardPerView = Math.round(carousel.offsetWidth / (firstCardWith));
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML('afterbegin', card.outerHTML);
});

carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML('beforeend', card.outerHTML);
});


arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        if (btn.id == "left") {
            carousel.scrollLeft += -firstCardWith;
        } else {
            carousel.scrollLeft += firstCardWith;
        }
    })
});


const infiniteScroll = () => {
    if (carousel.scrollLeft === 12) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");

    }
    else if (Math.ceil(carousel.scrollLeft) === (carousel.scrollWidth - carousel.offsetWidth)) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }

}; carousel.addEventListener("scroll", infiniteScroll);


