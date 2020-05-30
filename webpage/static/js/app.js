const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#Logo');
const hamburger = document.querySelector('.hamburger');
const headline = document.querySelector('.headline');
const projects = document.querySelector('.projects');


const tl = new TimelineMax();

tl.fromTo(hero, .5, {height: "0%"}, {height: "80%", ease: Power2.easeInOut})
.fromTo(hero, .8, {width: "100%"}, {width: "80%", ease: Power2.easeInOut})
.fromTo(slider, 1, {x: "-100%"}, {x: '0%', ease: Power2.easeInOut}, "-=.8")
.fromTo(logo, 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0}, "-=0.5")
.fromTo(hamburger, 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0}, "-=0.5")
.fromTo(headline, 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0}, "-=0.5")
.fromTo(projects, .8, {x: "-100%"}, {x: '0%', ease: Power2.easeInOut}, "-=.8")