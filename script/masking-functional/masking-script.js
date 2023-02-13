 var height_btn = document.querySelectorAll('.height-btn');
 [].forEach.call(height_btn, function (el) {
     el.onclick = function (e) {
         for (var i = 0; i < height_btn.length; i++) {
            height_btn[i].classList.remove('active');
         }
         el.classList.toggle('active');
     }
 });


 var width_btn = document.querySelectorAll('.width-btn');
 [].forEach.call(width_btn, function (el) {
     el.onclick = function (e) {
         for (var i = 0; i < width_btn.length; i++) {
            width_btn[i].classList.remove('active');
         }
         el.classList.toggle('active');
     }
 });

 var aspect_btn = document.querySelectorAll('.aspect-btn');
 [].forEach.call(aspect_btn, function (el) {
     el.onclick = function (e) {
         for (var i = 0; i < aspect_btn.length; i++) {
            aspect_btn[i].classList.remove('active');
         }
         el.classList.toggle('active');
     }
 });