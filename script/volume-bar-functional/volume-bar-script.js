//* sound volume control
const mute_btn = document.querySelector(".mute-btn");
const volumeChange = document.querySelector(".volume input");
const volume_val = document.querySelector(".volume-value");

const volume_up = document.querySelector("#volumeUp");
const volume_down = document.querySelector("#volumeDown");

volume_val.innerHTML = (100 - volumeChange.value) + "%";

// const audio = new Audio();
// audio.volume = parseFloat(volume_val.textContent) / 100;

volume_up.addEventListener("click", volume_upClick, false);

function volume_upClick() {
    const min = volumeChange.min;
    const max = volumeChange.max;
    const oldValue = parseFloat(volume_val.textContent);

    let newVal = oldValue;
   
    if (newVal < 100) {
        newVal += 1;
    } else if (newVal >= 100) {
        newVal == 100;
    }
    volume_val.innerHTML =  newVal + "%";
    volumeChange.value = 100 - newVal;
    // audio.volume = newVal / 100;
    volumeChange.style.backgroundSize = ((100 - newVal - min) * 100) / (max - min) + "% 100%";
}
volume_down.addEventListener("click",  volume_downClick, false);
function volume_downClick() {
    const min = volumeChange.min;
    const max = volumeChange.max;
    const oldValue = parseFloat(volume_val.textContent);

    let newVal = oldValue;
    if (newVal > 0) {
        newVal -= 1;
    } else if (newVal <= 0) {
        newVal == 0;
    }
    volume_val.innerHTML =  newVal + "%";
    volumeChange.value = 100 - newVal;
    // audio.volume = newVal / 100;
    volumeChange.style.backgroundSize = ((100 - newVal - min) * 100) / (max - min) + "% 100%";

}


mute_btn.addEventListener("click", mute_btnClick, false);

let muteState = 'unmute';
var currentVolume = 1;

function mute_btnClick() {
    const min = volumeChange.min;
    const max = volumeChange.max;

    if (muteState === 'unmute') {
        currentVolume = volumeChange.value;
        volumeChange.value = 100;
        volume_val.innerHTML = 0 + "%";
        muteState = 'mute';
        volumeChange.style.backgroundSize = "100% 100%";
        // audio.muted = true;
    } else {
        volumeChange.value = currentVolume;
        volume_val.innerHTML = 100 - currentVolume + "%"
        muteState = 'unmute';
        volumeChange.style.backgroundSize = ((currentVolume - min) * 100) / (max - min) + "% 100%";
        // audio.muted = false;
    }
}

const rangeInputs = document.querySelector('.volume input[type="range"]');


function handleInputChange(e) {
    let target = e.target;
    if (e.target.type !== "range") {
        target = document.getElementById("range");
    }
    const min = target.min;
    const max = target.max;
    const val = target.value;

    target.style.backgroundSize = ((val - min) * 100) / (max - min) + "% 100%";
    volume_val.innerHTML = (100 - val) + "%";
    // audio.volume = (100 - val) / 100;
	// audio.muted = false;
}

rangeInputs.addEventListener("input", handleInputChange);