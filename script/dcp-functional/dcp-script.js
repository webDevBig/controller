 var shows_item = document.querySelectorAll('.shows-item');
 [].forEach.call(shows_item, function (el) {
     el.onclick = function (e) {
         for (var i = 0; i < shows_item.length; i++) {
             shows_item[i].classList.remove('active');
         }
         el.classList.toggle('active');
     }
 });

 const secUp = document.querySelector("#secUp");
 const secDown = document.querySelector("#secDown");
 const secVal = document.querySelector(".audio-value");

 secUp.addEventListener("click", secUpClick, false);

 function secUpClick() {
     const oldValue = parseFloat(secVal.textContent);
     let newVal = oldValue;

     if (newVal < 100) {
         newVal += 1;
     } else if (newVal >= 100) {
         newVal == 100;
     }
     secVal.innerHTML = newVal + " Sec";
 }
 secDown.addEventListener("click", secDownClick, false);

 function secDownClick() {
     const oldValue = parseFloat(secVal.textContent);
     let newVal = oldValue;

     if (newVal > 0) {
         newVal -= 1;
     } else if (newVal <= 0) {
         newVal == 0;
     }
     secVal.innerHTML = newVal + " Sec";
 }