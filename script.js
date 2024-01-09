const ratingElements = document.querySelectorAll(".rating");

const  buttonElement = document.getElementById("button");

const containerElement = document.getElementById("container");

let selectedRating = "";

ratingElements.forEach((ratingElement) => {

    ratingElement.addEventListener("click", function (e) {
        removeActive();
        selectedRating = e.target.innerText || e.target.parentNode.innerText
        e.target.classList.add("active");
        e.target.parentNode.classList.add("active");
    });
});

buttonElement.addEventListener("click", function(){
    if (selectedRating != "") {
        containerElement.innerHTML = `
        <strong> Thank you</strong>
        <br>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p> we'll use your feedback to improve our customer suppport services</p>
        `
    }
})

 
function removeActive () {
    ratingElements.forEach((ratingElement) => {
        ratingElement.classList.remove("active");

    })
};
