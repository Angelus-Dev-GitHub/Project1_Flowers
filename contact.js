
const buttonToSubmit = document.querySelector("#formSubmission")
const formToHide = document.querySelector("#contactForm")
const thanksToShow=document.querySelector("#thanksMessage")
buttonToSubmit.onclick= function(event) {
    event.preventDefault();
    formToHide.style.display="none";
    thanksToShow.style.display="flex";
    thanksToShow.style.flexDirection="column";
    thanksToShow.style.alignItems="center";
    thanksToShow.style.textAlign="center";

}

