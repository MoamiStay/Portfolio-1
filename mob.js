const imgMob = document.querySelectorAll("#carousel-mob > a > img");
const leftArrowMob = document.querySelector("#left-mob");
const rightArrowMob = document.querySelector("#right-mob");
// const textsMob = [document.querySelector("#woodzTxt-mob"), document.querySelector("#museumTxt-mob"), document.querySelector("#rainydaysTxt-mob")]
const radiosMob = [document.querySelector("#woodz-mob"), document.querySelector("#museum-mob"), document.querySelector("#rainydays-mob")];
let currentPosMob = 0;
let counterMob = 0;
leftArrowMob.disabled = true;
// radiosMob[0].checked = true;

rightArrowMob.addEventListener("click", toRightMob);
leftArrowMob.addEventListener("click", toLeftMob);
radiosMob[0].addEventListener("click", woodzMob);
radiosMob[1].addEventListener("click", museumMob);
radiosMob[2].addEventListener("click", rainydaysMob);

const testMob = [rightArrowMob, leftArrowMob, radiosMob[0], radiosMob[1], radiosMob[2]];
testMob.forEach(item => {
    item.addEventListener("click", txtMatch)
});


function txtMatch() {
    for(let i = 0; i < texts.length; i++) {
    if(texts[i] !== texts[counterMob]) {
        texts[i].classList.add("hidden");
    } if(texts[i] === texts[counterMob]) {
        texts[i].classList.remove("hidden");
        texts[counterMob].classList.add("fadeIn");
    }
}
};

function toRightMob() {
    leftArrowMob.disabled = false;
    counterMob = counterMob+1;
    currentPosMob = currentPosMob - 100;
    // console.log(counter);
    // console.log(currentPos + "right");
    for(item of imgMob) {
        if(currentPosMob <= -130) {rightArrowMob.disabled = true};
        item.style.webkitTransform = `translateX(${currentPosMob}vw)`;
    };
    radiosMob[counterMob].checked = true;
    return counterMob, currentPosMob;
};

function toLeftMob() {
    rightArrowMob.disabled = false;
    counterMob = counterMob-1;
    currentPosMob = currentPosMob + 100;
    // console.log(counter);
    // console.log(currentPos + "left");
    for(item of imgMob) {
        if(currentPosMob >= 0) {leftArrowMob.disabled = true};
            item.style.webkitTransform = `translateX(${currentPosMob}vw)`
    };
    radiosMob[counterMob].checked = true;
    return counterMob, currentPos;
};


// should change to:
// for-loop/forEach --> run though *radios and add addEventlistener().
function woodzMob() {
    rightArrowMob.disabled = false;
    counterMob = 0;
    currentPosMob = 0;
    console.log(counterMob);
    for(item of imgMob) {
        if(currentPosMob >= 0) {leftArrowMob.disabled = true};
        item.style.webkitTransform = `translateX(${currentPosMob}vw)`;
    };
    radiosMob[counterMob].checked = true;
    return counterMob, currentPosMob;
};

function museumMob() {
    leftArrowMob.disabled = false;
    rightArrowMob.disabled = false;
    counterMob = 1;
    currentPosMob = -100;
    for(item of imgMob) {
        item.style.webkitTransform = `translateX(${currentPosMob}vw)`;
    };
    radiosMob[counterMob].checked = true;
    return counterMob, currentPosMob;
};

function rainydaysMob() {
    leftArrow.disabled = false;
    counterMob = 2;
    currentPosMob = -200;
    for(item of imgMob) {
        if(currentPosMob <= -200) {rightArrow.disabled = true};
        item.style.webkitTransform = `translateX(${currentPosMob}vw)`;
    };
    radiosMob[counterMob].checked = true;
    return counterMob, currentPosMob;
};