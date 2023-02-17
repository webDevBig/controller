 var audio_btn = document.querySelectorAll('.audio-settings-btn');
 [].forEach.call(audio_btn, function (el) {
     el.onclick = function (e) {
         for (var i = 0; i < audio_btn.length; i++) {
            audio_btn[i].classList.remove('active');
         }
         el.classList.toggle('active');
     }
 });