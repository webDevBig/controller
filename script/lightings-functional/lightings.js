var scene_btn = document.querySelectorAll('.scene-btn');
[].forEach.call(scene_btn, function (el) {
    el.onclick = function (e) {
        for (var i = 0; i < scene_btn.length; i++) {
           scene_btn[i].classList.remove('active');
        }
        el.classList.toggle('active');
    }
});



