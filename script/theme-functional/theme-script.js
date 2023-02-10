 var theme_item = document.querySelectorAll('.theme-item');
 [].forEach.call(theme_item, function (el) {
     el.onclick = function (e) {
         for (var i = 0; i < theme_item.length; i++) {
            theme_item[i].classList.remove('active');
         }
         el.classList.toggle('active');
     }
 });