//* sound volume control
const mute_btn = document.querySelector(".mute-btn");
const volumeChange = document.querySelector(".volume input");
const volume_val = document.querySelector(".volume-value");

const volume_up = document.querySelector("#volumeUp");
const volume_down = document.querySelector("#volumeDown");

volume_val.innerHTML = (100 - volumeChange.value) + "%";

const audio = new Audio();
audio.volume = parseFloat(volume_val.textContent) / 100;

volume_up.addEventListener("click", volume_upClick, false);

function volume_upClick() {
	const min = volumeChange.min;
	const max = volumeChange.max;
	const oldValue = parseFloat(volume_val.textContent);

	let newVal = oldValue;
	console.log(oldValue);
	if (newVal < 100) {
		newVal += 1;
	} else if (newVal >= 100) {
		newVal == 100;
	}
	volume_val.innerHTML = newVal + "%";
	volumeChange.value = 100 - newVal;
	audio.volume = newVal / 100;
	volumeChange.style.backgroundSize = ((100 - newVal - min) * 100) / (max - min) + "% 100%";
}
volume_down.addEventListener("click", volume_downClick, false);

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
	volume_val.innerHTML = newVal + "%";
	volumeChange.value = 100 - newVal;
	audio.volume = newVal / 100;
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
		audio.muted = true;
	} else {
		volumeChange.value = currentVolume;
		volume_val.innerHTML = 100 - currentVolume + "%"
		muteState = 'unmute';
		volumeChange.style.backgroundSize = ((currentVolume - min) * 100) / (max - min) + "% 100%";
		audio.muted = false;
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
	audio.volume = (100 - val) / 100;
	audio.muted = false;
}

rangeInputs.addEventListener("input", handleInputChange);

const playBtn = document.querySelector("#play"),
	pauseBtn = document.querySelector("#pause"),
	stopBtn = document.querySelector("#stop"),
	nextBtn = document.querySelector("#next"),
	prevBtn = document.querySelector("#prev"),
	backBtn = document.querySelector("#backward"),
	forBtn = document.querySelector("#forward");
const currentTime = document.querySelector('#currentTime') // <time>
const durationTime = document.querySelector('#durationTime') // <time>
const track_name = document.querySelector('.audio-name')




const music_list = [{
		name: 'Juice WRLD Ft Benny Blanco - Real Shit',
		music: 'music/Juice WRLD Ft Benny Blanco - Real Shit.mp3'
	},
	{
		name: 'Lil Baby, Lil Durk ft Rodwave - Rich Off Pain',
		music: 'music/Lil Baby, Lil Durk ft Rodwave - Rich Off Pain.mp3'
	},
	{
		name: 'Polo G – I Know',
		music: 'music/Polo G – I Know.mp3'
	},

];

let seek_slider = document.querySelector('.narrativ-seek-slider');
let track_index = 0;
let updateTimer;

loadTrack(track_index);

function loadTrack(track_index) {
	clearInterval(updateTimer);
	reset();

	audio.src = music_list[track_index].music;
	// track_art.style.backgroundImage = "url(" + music_list[track_index].img + ")";
	track_name.textContent = music_list[track_index].name;

	audio.load();
	console.log(audio.buffered)
	updateTimer = setInterval(setUpdate, 0.1);
}

function reset() {
	currentTime.textContent = "00:00";
	durationTime.textContent = "00:00";
	seek_slider.value = 0;
	seek_slider.style.backgroundSize = "0% 100%";
}

function setUpdate() {

	let seekPosition = 0;

	if (!isNaN(audio.duration)) {
		seekPosition = audio.currentTime * (100 / audio.duration);
		seek_slider.value = seekPosition;

		const min = seek_slider.min;
		const max = seek_slider.max;
		const val = seek_slider.value;


		seek_slider.style.backgroundSize = ((val - min) * 100) / (max - min) + "% 100%";


		let currentMinutes = Math.floor(audio.currentTime / 60);
		let currentSeconds = Math.floor(audio.currentTime - currentMinutes * 60);
		let durationMinutes = Math.floor(audio.duration / 60);
		let durationSeconds = Math.floor(audio.duration - durationMinutes * 60);

		if (currentSeconds < 10) {
			currentSeconds = "0" + currentSeconds;
		}
		if (durationSeconds < 10) {
			durationSeconds = "0" + durationSeconds;
		}
		if (currentMinutes < 10) {
			currentMinutes = "0" + currentMinutes;
		}
		if (durationMinutes < 10) {
			durationMinutes = "0" + durationMinutes;
		}
		durationTime.textContent = "0" + getTimeCodeFromNum(audio.duration);
		currentTime.textContent = "0" + getTimeCodeFromNum(audio.currentTime);
	}
}

function playTrack() {
	audio.play();
	isPlaying = true;
}

function nextSong() {
	track_index++;
	if (track_index > music_list.length - 1) {
		track_index = 0;
	}
	loadTrack(track_index);
	playTrack();
}
audio.addEventListener('ended', nextSong);
let s = document.querySelector('.narrativ-seek-slider')
s.addEventListener("input", seekTo);

function seekTo() {
	let seekto = audio.duration * (seek_slider.value / 100);
	audio.currentTime = seekto;

	seek_slider.style.backgroundSize = audio.currentTime / audio.duration * 100 + "% 100%"
}


//toggle between playing and pausing on button click

playBtn.addEventListener(
	"click",
	() => {
		audio.play();
	},
	false
);
pauseBtn.addEventListener(
	"click",
	() => {
		audio.pause();
	},
	false
);
stopBtn.addEventListener(
	"click",
	() => {
		audio.pause();
		audio.currentTime = 0;
	},
	false
);
nextBtn.addEventListener(
	"click",
	() => {
		nextSong()
	},
	false
);
prevBtn.addEventListener(
	"click",
	() => {
		track_index--;
		if (track_index < music_list.length - 1) {
			track_index = 0;
		}
		loadTrack(track_index);
		playTrack();
	},
	false
);
backBtn.addEventListener(
	"click",
	() => {
		audio.currentTime = audio.currentTime - 15;
		seek_slider.style.backgroundSize = audio.currentTime / audio.duration * 100 + "% 100%"
	},
	false
);
forBtn.addEventListener(
	"click",
	() => {
		audio.currentTime = audio.currentTime + 15;
		seek_slider.style.backgroundSize = audio.currentTime / audio.duration * 100 + "% 100%"
	},
	false
);



//turn 128 seconds into 2:08
function getTimeCodeFromNum(num) {
	let seconds = parseInt(num);
	let minutes = parseInt(seconds / 60);
	seconds -= minutes * 60;
	const hours = parseInt(minutes / 60);
	minutes -= hours * 60;

	if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
	return `${String(hours).padStart(2, 0)}:${minutes}:${String(seconds % 60).padStart(2, 0)}`;
}



// return_forward.addEventListener("click", return_forwardClick, false);

// function return_forwardClick() {
// 	audio.currentTime = audio.currentTime + 15;
// 	seek_slider.style.backgroundSize = audio.currentTime / audio.duration * 100 + "% 100%";
// }

// return_back.addEventListener("click", return_backClick, false);

// function return_backClick() {
// 	audio.currentTime = audio.currentTime - 15;
// 	seek_slider.style.backgroundSize = audio.currentTime / audio.duration * 100 + "% 100%";
// }