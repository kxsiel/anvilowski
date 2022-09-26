const screenshots = document.getElementById("screenshots");
const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");
let isDown = false;
let startX;
let scrollLeft;

screenshots.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - screenshots.offsetLeft;
    scrollLeft = screenshots.scrollLeft;
});
screenshots.addEventListener('mouseleave', () => {
    isDown = false;
});
screenshots.addEventListener('mouseup', () => {
    isDown = false;
});
screenshots.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - screenshots.offsetLeft;
    const walk = (x - startX) * 2; //scroll-fast
    screenshots.scrollLeft = scrollLeft - walk;
});

leftBtn.addEventListener('click', function() {
    screenshots.scrollBy({
        left: -250,
        top: 0,
        behavior: 'smooth'
    })
});

rightBtn.addEventListener('click', function() {
    screenshots.scrollBy({
        left: 250,
        top: 0,
        behavior: 'smooth'
    })
});