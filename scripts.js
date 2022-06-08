const img = document.querySelectorAll("#carousel > a > img");
const leftArrow = document.querySelector("#left");
const rightArrow = document.querySelector("#right");
const texts = [document.querySelector("#woodzTxt"), document.querySelector("#museumTxt"), document.querySelector("#rainydaysTxt")]
const radios = [document.querySelector("#woodz"), document.querySelector("#museum"), document.querySelector("#rainydays")];
let currentPos = 0;
let counter = 0;
radios[0].checked = true;

rightArrow.addEventListener("click", toRight);
leftArrow.addEventListener("click", toLeft);
radios[0].addEventListener("click", woodz);
radios[1].addEventListener("click", museum);
radios[2].addEventListener("click", rainydays);

const test = [rightArrow, leftArrow, radios[0], radios[1], radios[2]];
test.forEach(item => {
    item.addEventListener("click", txtMatch)
});


function txtMatch() {
    for(let i = 0; i < texts.length; i++) {
    if(texts[i] !== texts[counter]) {
        texts[i].classList.add("hidden");
    } if(texts[i] === texts[counter]) {
        texts[i].classList.remove("hidden");
        texts[counter].classList.add("fadeIn");
    }
}
};

function toRight() {
    leftArrow.disabled = false;
    counter = counter+1;
    currentPos = currentPos - 65;
    // console.log(counter);
    // console.log(currentPos + "right");
    for(item of img) {
        if(currentPos <= -130) {rightArrow.disabled = true};
        item.style.webkitTransform = `translateX(${currentPos}vw)`;
    };
    radios[counter].checked = true;
    return counter, currentPos;
};

function toLeft() {
    rightArrow.disabled = false;
    counter = counter-1;
    currentPos = currentPos + 65;
    // console.log(counter);
    // console.log(currentPos + "left");
    for(item of img) {
        if(currentPos >= 0) {leftArrow.disabled = true};
            item.style.webkitTransform = `translateX(${currentPos}vw)`
    };
    radios[counter].checked = true;
    return counter, currentPos;
};


// should change to:
// for-loop/forEach --> run though *radios and add addEventlistener().
function woodz() {
    rightArrow.disabled = false;
    counter = 0;
    currentPos = 0;
    console.log(counter);
    for(item of img) {
        if(currentPos >= 0) {leftArrow.disabled = true};
        item.style.webkitTransform = `translateX(${currentPos}vw)`;
    };
    radios[counter].checked = true;
    return counter, currentPos;
};

function museum() {
    leftArrow.disabled = false;
    rightArrow.disabled = false;
    counter = 1;
    currentPos = -65;
    for(item of img) {
        item.style.webkitTransform = `translateX(${currentPos}vw)`;
    };
    radios[counter].checked = true;
    return counter, currentPos;
};

function rainydays() {
    leftArrow.disabled = false;
    counter = 2;
    currentPos = -130;
    for(item of img) {
        if(currentPos <= -130) {rightArrow.disabled = true};
        item.style.webkitTransform = `translateX(${currentPos}vw)`;
    };
    radios[counter].checked = true;
    return counter, currentPos;
};