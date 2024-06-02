function openForm() {
    document.getElementById("contactForm").style.display = "block";
}

function closeForm() {
    document.getElementById("contactForm").style.display = "none";
}


let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    const totalSlides = slides.length;
    const slidesToShow = 3;
    const totalDots = dots.length;
    const offset = index * (100 / slidesToShow + 1); 

    document.querySelector('.slides').style.transform = `translateX(-${offset}%)`;

    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    const totalSlides = slides.length;
    const slidesToShow = 3;
    const totalDots = dots.length;

    currentIndex = (currentIndex + 1) % totalDots;
    showSlide(currentIndex);
}

function setSlide(index) {
    currentIndex = index;
    showSlide(currentIndex);
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => setSlide(index));
});

setInterval(nextSlide, 3000);


document.querySelectorAll('.project-item').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.project-item').forEach(el => el.classList.remove('active'));
        item.classList.add('active');
        const imageSrc = item.getAttribute('data-image');
        document.getElementById('projectImage').setAttribute('src', imageSrc);
    });
});
