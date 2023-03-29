 var source_item = document.querySelectorAll('.source-item');
 let modalBackground = document.getElementById('modal-source');
 let source_value = document.querySelector('#modal-source span');
 let source_img = document.querySelector('#modal-source i');
 //  var source_name = 
 [].forEach.call(source_item, function (el) {
     el.onclick = function (e) {
         for (var i = 0; i < source_item.length; i++) {
             source_item[i].classList.remove('active');
         }
         var v = el.querySelector('.source-name').innerHTML
         el.classList.toggle('active');
         source_value.innerHTML = v;
         modalBackground.style.display = 'block';
         source_img.setAttribute("class", v);

         function page() {
             window.open(v + '.html', "_self")
         }
         // setTimeout(function () {
         //     page()
         // }, 2500);
     }
 });