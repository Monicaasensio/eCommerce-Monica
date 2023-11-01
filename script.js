//image slider

let index = 0; //image being displayed tracker
showSlide();  

function showSlide() {
    const images = document.getElementsByClassName("image"); //select all images and store in images array

    for (let i = 0;  i < images.length; i++) { //loop through images
        images[i].style.display = "none"; //hides other imgs
    }
    index = index + 1; //increment sliderIndex by 1

    if (index > images.length) { //stays within range of 3
        index = 1;
    }

    images[index-1].style.display = "block"; //displays only one img in slide index 
    setTimeout(showSlide, 2000); //executes function after 2s delay (2000ms)
}


//reviews
const reviewImgs = ["../images/review1.png", "../images/review2.png", "../images/review3.png", "../images/review4.png", "../images/review5.png"];

const btnNext = document.querySelector(".review-next");
const btnPrevious = document.querySelector(".review-previous");
const img = document.querySelector(".review-img");
let counter = 1;

btnNext.addEventListener('click', function() {
    if (counter === 5) {
        counter = 0;
    }

    img.src = reviewImgs[counter];
    counter++;
}
);

btnPrevious.addEventListener('click', function() {
    if (counter === -1) {
        counter = 4;
    }

    img.src = reviewImgs[counter];
    counter--;
}
);
