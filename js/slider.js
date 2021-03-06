const carousel = document.querySelector(".carousel");

const wrapper = carousel.querySelector(".carousel__slides");
const slides = wrapper.querySelectorAll(".carousel__slide");

const dots = carousel.querySelectorAll(".carousel__dot");


const observerOptions = {
    root: wrapper,
    rootMargin: "0px",
    threshold: 0.5,
};

const observer = new IntersectionObserver(
    highlightDotOnScroll,
    observerOptions
);

slides.forEach((slide) => {
    observer.observe(slide);
});

dots.forEach((dot) => {
    dot.addEventListener("click", (evt) => {
        evt.preventDefault();
        const targetSlide = wrapper.querySelector(dot.getAttribute("href"));
        scrollToSlide(targetSlide);
    });
});


function highlightDotOnScroll(entries) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            dots.forEach((dot) => {
                const isActive = removeHashFromLink(dot) === entry.target.id;
                dot.classList.toggle("carousel__dot--active", isActive);
            });
        }
    });
}

function scrollToSlide(slide) {
    wrapper.scrollTo({
        left: slide.offsetLeft,
        behavior: "smooth",
    });
}

function removeHashFromLink(link) {
    const href = link.getAttribute("href");
    return href.substring(1);
}