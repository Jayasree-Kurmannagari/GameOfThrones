function parallax(element, distance, speed) {
    const item = document.querySelector(element);
    item.style.transform = `translateY(${distance * speed}px)`;
}
window.addEventListener("scroll", function() {
    parallax("header", window.scrollY, 1);

});

function parallaxX(element, distance, speed) {
    const item = document.querySelector(element);
    item.style.transform = `translateX(-${distance * speed}px)`;
}
window.addEventListener("scroll", function() {
    parallaxX(".lion", window.scrollY, 0.6);
});

var swiper = new Swiper('.slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel: {
        invert: false,
    },
    pagination: {
        el: '.slider-pagination',
        clickable: true,
    }
});