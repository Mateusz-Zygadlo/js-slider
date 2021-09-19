const nextSlide = document.querySelector('.next');
const backSlide = document.querySelector('.back');
const point = document.querySelector('.points');
const points = document.querySelectorAll('.point');
const slider = document.querySelector('.slider');

const colorsArr = ['green', 'orange', 'lightblue', 'gray', 'yellow', 'red', 'purple', 'pink', 'violet', 'brown'];
let count = 1;

const createSpan = (i) => {
    slider.textContent = '';
    const span = document.createElement('span');
    span.classList.add('slide');
    span.style.backgroundColor = colorsArr[i - 1];
    slider.appendChild(span);
}

const addBasicSpan = () => {
    points.forEach((item) => {
        item.textContent = 'radio_button_unchecked';
    })
}

const nextSlideClick = () => {
    count++; 
    if(count > colorsArr.length){
        count = 1;
    }
    
    addBasicSpan();
    points[count - 1].textContent = 'radio_button_checked';
    createSpan(count);
}

const backSlideClick = () => {
    count--;
    if(count < 1){
        count = colorsArr.length;
    }
    
    addBasicSpan();
    points[count - 1].textContent = 'radio_button_checked';   
    createSpan(count);
}

const pointClick = (e) => {
    addBasicSpan();
    points[e.target.dataset.id - 1].textContent = 'radio_button_checked';
    count = e.target.dataset.id;
    createSpan(count);
}

const startPageSlider = () => {
    addBasicSpan();
    createSpan(count);
    points[count - 1].textContent = 'radio_button_checked';
}

nextSlide.addEventListener('click', nextSlideClick);
backSlide.addEventListener('click', backSlideClick);
points.forEach((item) => {
    item.addEventListener('click', pointClick);
})

startPageSlider();