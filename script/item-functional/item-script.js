 var source_item = document.querySelectorAll('.source-item');
 [].forEach.call(source_item, function (el) {
     el.onclick = function (e) {
         for (var i = 0; i < source_item.length; i++) {
            source_item[i].classList.remove('active');
         }
         el.classList.toggle('active');
     }
 });