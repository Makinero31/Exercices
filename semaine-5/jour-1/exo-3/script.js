const images = [
    "https://cdn2.thecatapi.com/images/MTY3ODIyMQ.jpg",
    "https://cdn2.thecatapi.com/images/bpc.jpg",
    "https://cdn2.thecatapi.com/images/c1.jpg",
    "https://cdn2.thecatapi.com/images/6qi.jpg",
    "https://cdn2.thecatapi.com/images/4r3.jpg",
    "https://cdn2.thecatapi.com/images/a3s.jpg",
    "https://cdn2.thecatapi.com/images/e35.jpg"
];

let picture = document.querySelector('.slider')

let index = 1

picture.setAttribute('src', images[0]);

setInterval(() => {
    picture.setAttribute('src', images[index]);
    index = (index + 1) % images.length;
}, 2000);


/*
let index = 0

let picture = document.querySelector('.slider')

picture.setAttribute('src', images[index]);

index ++

let firstInterval = setInterval(() => {
    picture.setAttribute('src', images[index]);
    index = (index + 1);
}, 2000);

setTimeout(() => {
    clearInterval(firstInterval);
}, images.length * 2000);

setTimeout(() => {
setInterval(() => {
    index = 0
let idInterval = setInterval(() => {
    picture.setAttribute('src', images[index]);
    index = (index + 1);
}, 2000);
    
setTimeout(() => {
    clearInterval(idInterval);
}, (images.length + 1) * 2000);
}, (images.length + 1) * 2000);
}, (images.length + 1) * 2000);
*/


