 var sources_btn = document.querySelectorAll('.sources-btn');
 [].forEach.call(sources_btn, function (el) {
     el.onclick = function (e) {
         for (var i = 0; i < sources_btn.length; i++) {
            sources_btn[i].classList.remove('active');
         }
         el.classList.toggle('active');
     }
 });

 var lighting_btn = document.querySelectorAll('.lighting-btn');
 [].forEach.call(lighting_btn, function (el) {
     el.onclick = function (e) {
         for (var i = 0; i < lighting_btn.length; i++) {
            lighting_btn[i].classList.remove('active');
         }
         el.classList.toggle('active');
     }
 });