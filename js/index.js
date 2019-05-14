// Your code goes here



let navLink = document.querySelectorAll('.nav-link');



function onHover(e) {

    return e.target.style.backgroundColor = '#F4F4F4'
}

for (let i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener('mouseover', onHover);
    navLink[i].addEventListener('mouseout', e => e.target.style.backgroundColor = 'white');
    navLink[i].addEventListener('click', e => e.preventDefault());
}

let body = document.querySelector('body');

function keyDown(e) {
    let colors = ['AliceBlue',
        'AntiqueWhite',
        'Aqua',
        'Aquamarine',
        'Azure',
        'Beige',
        'Bisque',
        'Black',
        'BlanchedAlmond',
        'Blue',
        'BlueViolet',
        'Brown',
        'BurlyWood',
        'CadetBlue',
        'Chartreuse',
        'Chocolate',
        'Coral',
        'CornflowerBlue',
        'Cornsilk',
        'Crimson',
        'Cyan'];


    let color = colors[Math.floor(Math.random() * colors.length)]

    console.log(color);

    return e.target.style.color = color;

};

body.addEventListener('keydown', keyDown);

let intro = document.querySelector('.intro');

function gS() {
    return TweenLite.to(this, 1, { x: 100 });
};

intro.addEventListener('mouseover', gS);

let content = document.querySelector('.content-section');

function wheel() {
    return TweenLite.to(this, 1, { rotation: 90, transformOrigin: "left 50%" });
};

content.addEventListener('wheel', wheel);

let images = document.querySelectorAll('img');

images[2].addEventListener('drag', function (e) {
    e.target.style.opacity = 0.8;
    return TweenLite.to(this, 2, { rotation: 360 });
});

let headerDestination = document.querySelector('body');

headerDestination.children[0].addEventListener('load', alert('The page has refreshed'));


let butone = document.querySelector('#form');

butone.children[0].addEventListener('focus', e => e.target.style.background = 'pink');

