// // up climate
var upTemp = document.querySelectorAll('.up-temp');


[].forEach.call(upTemp, function (el) {
    el.onclick = function (e) {
        var value = document.querySelectorAll('.value span');
        const oldValue = parseFloat(el.parentElement.querySelector('.value span').textContent);

        let newVal;
        if (oldValue < 100) {
            newVal = oldValue + 1;
        } else {
            newVal = 100;
        }

        let numElement = document.querySelector('.number span');
        circle.style.strokeDashoffset = 723 - (723 * (newVal / 100));
        numElement.innerText = newVal;

        for (var i = 0; i < value.length; i++) {
            value[i].innerText = newVal;
        }
    }
});


// down climate
var downTemp = document.querySelectorAll('.down-temp');
[].forEach.call(downTemp, function (el) {
    el.onclick = function (e) {
        var value = document.querySelectorAll('.value span');
        const oldValue = parseFloat(el.parentElement.querySelector('.value span').textContent);

        let newVal;
        newVal = oldValue - 1;
        if (newVal <= 0) {
            newVal = 0;
        } else {
            newVal = newVal
        }
        let numElement = document.querySelector('.number span');
        numElement.innerText = newVal;
        circle.style.strokeDashoffset = 723 - (723 * (newVal / 100));

        for (var i = 0; i < value.length; i++) {
            value[i].innerText = newVal;
        }
    }
});




const block = document.querySelectorAll('.block');

let circle = document.querySelector('.circle');
window.addEventListener('load', function () {
    block.forEach(item => {
        let numElement = item.querySelector('.current');
        let num = parseInt(numElement.innerText);
        let count = 0;
        let time = 2000 / num;
        setInterval(() => {
            if (count == num) {
                clearInterval();
            } else {
                count += 1;
                numElement.innerText = count;
            }
        }, time)
        circle.style.strokeDashoffset = 723 - (723 * (num / 100));

    })
});