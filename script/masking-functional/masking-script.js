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

 var aspect_btn = document.querySelectorAll('.aspect-btn'),
     masking_value = document.querySelector('.masking-view-value');
 [].forEach.call(aspect_btn, function (el) {
     el.onclick = function (e) {
         for (var i = 0; i < aspect_btn.length; i++) {
             aspect_btn[i].classList.remove('active');
             masking_view.classList.remove('aspect-ratio' + (i+1));
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
         console.log(el.value)

         masking_view.classList.add('aspect-ratio' + el.value);
         masking_value.innerHTML = el.innerHTML;
     }
 });
 var masking_view = document.querySelector('.masking-view');

 //  full height
 var height_full = document.querySelector('.height-full');
 height_full.addEventListener("click", height_fullClick, false);

 function height_fullClick() {
     for (var i = 0; i < aspect_btn.length; i++) {
         aspect_btn[i].classList.remove('active');
         masking_view.classList.remove('aspect-ratio' + (i + 1));
     }

     masking_view.classList.add('height-change');
 }


 //  default height
 var height_def = document.querySelector('.height-def');
 height_def.addEventListener("click", height_defClick, false);

 function height_defClick() {
     for (var i = 0; i < aspect_btn.length; i++) {
         aspect_btn[i].classList.remove('active');
         masking_view.classList.remove('aspect-ratio' + (i + 1));
     }

     masking_view.classList.remove('height-change')
 }

 //  full width
 var width_full = document.querySelector('.width-full');
 width_full.addEventListener("click", width_fullClick, false);

 function width_fullClick() {

     for (var i = 0; i < aspect_btn.length; i++) {
         aspect_btn[i].classList.remove('active');
         masking_view.classList.remove('aspect-ratio' + (i + 1));
     }

     masking_view.classList.add('width-change');
 }

 //  default width
 var width_def = document.querySelector('.width-def');
 width_def.addEventListener("click", width_defClick, false);

 function width_defClick() {

     for (var i = 0; i < aspect_btn.length; i++) {
         aspect_btn[i].classList.remove('active');
         masking_view.classList.remove('aspect-ratio' + (i + 1));
     }

     masking_view.classList.remove('width-change')
 }