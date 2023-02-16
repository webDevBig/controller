 var controler_btn = document.querySelectorAll('.controler-btn');
 [].forEach.call(controler_btn, function (el) {
     el.onclick = function (e) {
         for (var i = 0; i < controler_btn.length; i++) {
            controler_btn[i].classList.remove('active');
         }
         el.classList.toggle('active');
     }
 });