const lightingsChange = document.querySelectorAll(".lightings input");
const lightingsValue = document.querySelectorAll('.lightings-perc');



const lightingsrangeInputs = document.querySelectorAll('.lightings input[type="range"]');
const lightingsrangeThumb = document.querySelectorAll('.lightings input[type=range]::-webkit-slider-thumb');



function handleInputChange(e) {
    let target = e.target;
    if (e.target.type !== "range") {
        target = document.getElementById("range");
    }
    const min = target.min;
    const max = target.max;
    const val = target.value;

    target.style.backgroundSize = ((val - min) * 100) / (max - min) + "% 100%";

    if (target.value == 0) {
        target.classList.add('empty')
    } else {
        target.classList.remove('empty')
    }
    target.parentNode.parentNode.parentNode.querySelector('.lightings-perc').innerHTML = val + "%"
}
for (i = 0; i < lightingsrangeInputs.length; i++) {
    const min = lightingsrangeInputs[i].min;
    const max = lightingsrangeInputs[i].max;
    const val = lightingsrangeInputs[i].value;
    if (lightingsrangeInputs[i].value == 0) {
        lightingsrangeInputs[i].classList.add('empty')
    } else {
        lightingsrangeInputs[i].classList.remove('empty')
    }

    lightingsrangeInputs[i].style.backgroundSize = ((val - min) * 100) / (max - min) + "% 100%";
    lightingsValue[i].innerHTML = val + "%"

    lightingsrangeInputs[i].addEventListener("input", handleInputChange)
}