// up climate
var upTemp = document.querySelectorAll('.up-temp');
[].forEach.call(upTemp, function (el) {
    el.onclick = function (e) {
        var value = el.parentElement.querySelector('.value span');
        const oldValue = parseFloat(el.parentElement.querySelector('.value span').textContent);
       

        let newVal;
        if (oldValue < 100) {
            newVal = oldValue + 1;
        }
        else{
            newVal = 100;
        }

        value.innerHTML = newVal;
    }
});
// down climate
var downTemp = document.querySelectorAll('.down-temp');
[].forEach.call(downTemp, function (el) {
    el.onclick = function (e) {
        var value = el.parentElement.querySelector('.value span');
        const oldValue = parseFloat(el.parentElement.querySelector('.value span').textContent);

        let newVal;
        newVal = oldValue - 1;
        if (newVal <= 0) {
            value.innerHTML = 0;
        } else {
            value.innerHTML = newVal;
        }

    }
});