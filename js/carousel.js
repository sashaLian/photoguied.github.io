let slideIndex = 1,
    slides = document.querySelectorAll('.reviews_inner_block'),
    prev = document.querySelector('.prev'),
    next = document.querySelector('.next');

showSlides(slideIndex);

function showSlides(n) {
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    slides.forEach((item)=> item.style.display = 'none');

    slides[slideIndex - 1].style.display = 'flex';
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlides(n) {
    showSlides(slideIndex = n);
}

prev.addEventListener('click', function() {
    plusSlides(-1);
});
next.addEventListener('click', function() {
    plusSlides(1);
});