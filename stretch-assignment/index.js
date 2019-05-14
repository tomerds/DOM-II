

let grey = document.querySelector('.block--gray');
let pink = document.querySelector('.block--pink');
let green = document.querySelector('.block--green');
let blue = document.querySelector('.block--blue');
let red = document.querySelector('.block--red');

console.log(grey);

function moveToTop() {
    this.parentElement.prepend(this);
};


function blast() {
    TweenLite.to(this, 1, { x: 100, delay: 1 });
};

grey.addEventListener('mousedown', blast);
pink.addEventListener('mousedown', blast);

grey.addEventListener('mouseup', moveToTop);
pink.addEventListener('click', moveToTop);
green.addEventListener('click', moveToTop);
blue.addEventListener('click', moveToTop);
red.addEventListener('click', moveToTop);