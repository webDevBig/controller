// // // up climate
// var upTempCool = document.querySelector('.up-cool');
// var needleCool = document.querySelector('.cool-needle');

// upTempCool.addEventListener("click", upTempCoolClick, false);

// function upTempCoolClick() {
//     var value = el.parentElement.querySelector('.value span');
//     const oldValue = parseFloat(el.parentElement.querySelector('.value span').textContent);

//     let newVal;
//     if (oldValue < 100) {
//         newVal = oldValue + 1;
//     } else {
//         newVal = 100;
//     }

//     value.innerHTML = newVal;
//     let numElement = document.querySelector('.number span');
//     numElement.innerText = newVal;

// }

// // down climate
// var downTemp = document.querySelectorAll('.down-temp');
// [].forEach.call(downTemp, function (el) {
//     el.onclick = function (e) {
//         var value = el.parentElement.querySelector('.value span');
//         const oldValue = parseFloat(el.parentElement.querySelector('.value span').textContent);

//         let newVal;
//         newVal = oldValue - 1;
//         if (newVal <= 0) {
//             value.innerHTML = 0;
//         } else {
//             value.innerHTML = newVal;
//         }
//         let numElement = document.querySelector('.number span');
//         numElement.innerText = newVal;
//         circle.style.strokeDashoffset = 723 - (723 * (newVal / 100));
//     }
// });




// const block = document.querySelectorAll('.block');

// let circle = document.querySelector('.circle');
// window.addEventListener('load', function () {
//     block.forEach(item => {
//         let numElement = item.querySelector('.current');
//         let num = parseInt(numElement.innerText);
//         let count = 0;
//         let time = 2000 / num;
//         setInterval(() => {
//             if (count == num) {
//                 clearInterval();
//             } else {
//                 count += 1;
//                 numElement.innerText = count;
//             }
//         }, time)
//         circle.style.strokeDashoffset = 723 - (723 * (num / 100));

//     })
// });







// Define function to update display
function updateGr() {
    var gradi = 40;
    document.querySelector(".heat").textContent = gradi;
    document.querySelector(".ext").textContent = gradi;
    document.querySelector("#thermostat-heat .number").style.transform = "translate(-50%, -50%) rotate(" + (-180 + gradi * 10) + "deg)";
    document.querySelector("#thermostat-heat .shadow").style.transform = "translate(-50%, -50%) rotate(" + (-180 + gradi * 10) + "deg)";
    document.querySelector("#thermostat-heat .fill").style.animation = "none";
    document.querySelector("#thermostat-heat .shadow").style.animation = "none";
}

// Add event listener for minus button
document.querySelector(".minus-heat").addEventListener("mousedown", function () {
    var gradi = 40;
    var max = 99;
    var min = 38;
    if (gradi > min) {
        gradi--;
        updateGr();
        if (gradi >= 39) {
            document.querySelector(".fill1").style.transform = "rotate(" + (gradi - 39) * 10 + "deg)";
            document.querySelector(".fill1").style.transitionDelay = "0s";
        } else if (gradi == 17) {
            document.querySelector(".fill2").style.transform = "rotate(" + gradi * 10 + "deg)";
            document.querySelector(".fill2").style.transitionDelay = "0.5s";
        } else {
            document.querySelector(".fill2").style.transform = "rotate(" + gradi * 10 + "deg)";
            document.querySelector(".fill2").style.transitionDelay = "0s";
        }
    }
});

// Add event listener for plus button
document.querySelector(".plus-heat").addEventListener("mousedown", function () {
    var gradi = 40;
    var max = 99;
    var min = 38;
    if (gradi < max) {
        gradi++;
        updateGr();
        if (gradi > 40) {
            document.querySelector(".fill1").style.transform = "rotate(" + (gradi - 39) * 10 + "deg)";
            document.querySelector(".fill1").style.transitionDelay = "0s";
        } else if (gradi == 40) {
            document.querySelector(".fill1").style.transform = "rotate(" + (gradi - 39) * 10 + "deg)";
            document.querySelector(".fill1").style.transitionDelay = "1s";
        } else {
            document.querySelector(".fill2").style.transform = "rotate(" + gradi * 10 + "deg)";
            document.querySelector(".fill2").style.transitionDelay = "0s";
        }
    }
});