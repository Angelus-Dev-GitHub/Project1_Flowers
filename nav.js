const menuSelector = document.querySelector('#burgerbox');
const thisPage = document.querySelector('.current-page');
var x = document.querySelector(".title-of-the-page").innerHTML;
document.querySelector(".current-page").innerHTML = x;
const titlePage = document.querySelector(".title-of-the-page")
titlePage.style.display = "none";

menuSelector.onclick = function() {
    const navigationBar = document.querySelector('#navbar');
    const thisPage = document.querySelector('.current-page');
    const titlePage = document.querySelector(".title-of-the-page")
    const pageContent = document.querySelector('main');
    if (menuSelector.checked == true ) {
        pageContent.style.display = "none";
        navigationBar.style.display = "flex";
        navigationBar.style.alignItems = "flex-start";
        navigationBar.style.flexDirection = "column";


        thisPage.style.display = "none";
        titlePage.style.display = "none";
    } else {
        navigationBar.style.display = "none";
        pageContent.style.display = "block";
        thisPage.style.display = "block";
        titlePage.style.display = "none";
    }
};

