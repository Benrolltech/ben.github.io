// Activate media query
const bars = document.getElementById("bars");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

bars.addEventListener('click', function()
 {
  bars.classList.toggle('is-active');
  nav.classList.toggle('active');
 });

// Activate search box 
const search = document.querySelector("#searchoff");
const box = document.querySelector("#searchboxx");

search.addEventListener('click', function()
{
  box.classList.toggle('searchMe');
  search.classList.toggle('searchback');
});

// toggle night mode

const moon = document.querySelector("#moon");
const bg = document.querySelector("body");
// const bgB = document.querySelector("#head");

moon.addEventListener('click', function()
{
  bg.classList.toggle('blackbg');
  moon.classList.toggle('rotatey');
});

//scroll top button

const Mybutton = document.querySelector("#myBtn");

window.onscroll = function()
{
  scrollFunction()
};

function scrollFunction()
{
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100)
  {
    Mybutton.style.display  = "flex";
  } else
  {
    Mybutton.style.display  = "none";
  }
}

function topFunction()
{
  document.body.scrollTop = 0; // for safari
  document.documentElement.scrollTop = 0; // for chrome, firefox, IE and Opera
}

// full resolution

const video = document.getElementById("video");

video.addEventListener('click', function()
{
  video.style.width ="100%";
});