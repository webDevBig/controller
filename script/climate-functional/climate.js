// // up climate
var upTempCool = document.querySelector('.up-cool');
var needleCool = document.querySelector('.cool-needle');


var el = document.getElementById("complex-transform");
var st = window.getComputedStyle(el, null);
var tr = st.getPropertyValue("transform") ||
         "fail...";

         var values = tr.split('(')[1];
    values = values.split(')')[0];
    values = values.split(',');
var a = values[0];
var b = values[1];
var c = values[2];
var d = values[3];

var scale = Math.sqrt(a*a + b*b);

// arc sin, convert from radians to degrees, round
// DO NOT USE: see update below
var sin = b/scale;
var angle = Math.round(Math.asin(sin) * (180/Math.PI));

// works!
console.log('Rotate: ' + angle + 'deg');

upTempCool.addEventListener("click", upTempCoolClick, false);

function upTempCoolClick() {
    var value = el.parentElement.querySelector('.value span');
    const oldValue = parseFloat(el.parentElement.querySelector('.value span').textContent);

    let newVal;
    if (oldValue < 100) {
        newVal = oldValue + 1;
    } else {
        newVal = 100;
    }

    value.innerHTML = newVal;
    let numElement = document.querySelector('.number span');
    numElement.innerText = newVal;
    
}

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





// // Set initial values
// var gradi = document.querySelector(".ext").textContent;
// console.log(gradi)
// // var max = 99;
// // var min = 2;

// // Define function to update display
// function updateGr() {
//     document.querySelector(".heat").textContent = gradi;
//     document.querySelector(".ext").textContent = gradi;
//     // document.querySelector(".number").style.transform = "translate(-50%, -50%) rotate(" + (gradi * 10) + "deg)";
//     // document.querySelector(".shadow").style.transform = "translate(-50%, -50%) rotate(" + (-180 + gradi * 10) + "deg)";
//     document.querySelector(".fill").style.animation = "none";
//     // document.querySelector(".shadow").style.animation = "none";
// }

// // Add event listener for minus button
// document.querySelector(".minus").addEventListener("mousedown", function () {
//     if (gradi > min) {
//         gradi--;
//         updateGr();
//         if (gradi >= 18) {
//             document.querySelector(".fill1").style.transform = "rotate(" + (gradi - 18) * 10 + "deg)";
//             document.querySelector(".fill1").style.transitionDelay = "0s";
//         } else if (gradi == 17) {
//             document.querySelector(".fill2").style.transform = "rotate(" + gradi * 10 + "deg)";
//             document.querySelector(".fill2").style.transitionDelay = "0.5s";
//         } else {
//             document.querySelector(".fill2").style.transform = "rotate(" + gradi * 10 + "deg)";
//             document.querySelector(".fill2").style.transitionDelay = "0s";
//         }
//     }
// });

// // Add event listener for plus button
// document.querySelector(".up-cool").addEventListener("mousedown", function () {
//     var max = 99,
//     min = 59;
//     if (gradi < max) {
//         gradi++;
//         updateGr();
//         document.querySelector(".fill1").style.transform = "rotate(-" + (gradi - 18) * 10 + "deg)";
//         document.querySelector(".fill1").style.transitionDelay = "1s";
//     }
// });
// // Add event listener for plus button
// document.querySelector(".down-cool").addEventListener("mousedown", function () {
//     if (gradi <= max) {
//         gradi--;
//         updateGr();
//         document.querySelector(".fill1").style.transform = "rotate(-" + (gradi - 18) * 10 + "deg)";
//         document.querySelector(".fill1").style.transitionDelay = "0s";
//     }
// });