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
         for (var i = 0; i < height_btn.length; i++) {
             height_btn[i].classList.remove('active');
         }
         for (var i = 0; i < width_btn.length; i++) {
             width_btn[i].classList.remove('active');
         }
         masking_view.classList.remove('height-change')
         masking_view.classList.remove('width-change')
         el.classList.toggle('active');
     }
 });
 var masking_view = document.querySelector('.masking-view');

 // 1:1

 var aspect_btn1 = document.querySelector('.aspect-btn1');
 aspect_btn1.addEventListener("click", aspect_btn1Click, false);

 function aspect_btn1Click() {

     masking_view.style.aspectRatio = 'auto 1 / 1';
 }

 //  4:3
 var aspect_btn4 = document.querySelector('.aspect-btn4');
 aspect_btn4.addEventListener("click", aspect_btn4Click, false);

 function aspect_btn4Click() {
     masking_view.style.aspectRatio = 'auto 4 / 3'
 }

 //  16:9
 var aspect_btn16 = document.querySelector('.aspect-btn16');
 aspect_btn16.addEventListener("click", aspect_btn16Click, false);

 function aspect_btn16Click() {
     masking_view.style.aspectRatio = 'auto 16 / 9'
 }

 //  2.35:1
 var aspect_btn2 = document.querySelector('.aspect-btn2');
 aspect_btn2.addEventListener("click", aspect_btn2Click, false);

 function aspect_btn2Click() {
     masking_view.style.aspectRatio = 'auto 2.35 / 1'
 }



 //  full height
 var height_full = document.querySelector('.height-full');
 height_full.addEventListener("click", height_fullClick, false);

 function height_fullClick() {
     for (var i = 0; i < aspect_btn.length; i++) {
         aspect_btn[i].classList.remove('active');
     }
     masking_view.classList.add('height-change');
     masking_view.style.aspectRatio = 'auto 16 / 9'
 }


 //  default height
 var height_def = document.querySelector('.height-def');
 height_def.addEventListener("click", height_defClick, false);

 function height_defClick() {
     for (var i = 0; i < aspect_btn.length; i++) {
         aspect_btn[i].classList.remove('active');
     }
     masking_view.classList.remove('height-change')
 }

 //  full width
 var width_full = document.querySelector('.width-full');
 width_full.addEventListener("click", width_fullClick, false);

 function width_fullClick() {

     for (var i = 0; i < aspect_btn.length; i++) {
         aspect_btn[i].classList.remove('active');
     }
     masking_view.classList.add('width-change');
     masking_view.style.aspectRatio = 'auto 16 / 9'
 }

 //  default width
 var width_def = document.querySelector('.width-def');
 width_def.addEventListener("click", width_defClick, false);

 function width_defClick() {

     for (var i = 0; i < aspect_btn.length; i++) {
         aspect_btn[i].classList.remove('active');
     }
     masking_view.classList.remove('width-change')
 }