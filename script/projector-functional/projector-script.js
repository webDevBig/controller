 var macros_btn = document.querySelectorAll('.macros-btn');
 [].forEach.call(macros_btn, function (el) {
     el.onclick = function (e) {
         for (var i = 0; i < macros_btn.length; i++) {
             macros_btn[i].classList.remove('active');
         }
         el.classList.toggle('active');
     }
 });


 // change text when Dowser is OPEN/CLOSE in Projector tab

 var switchDowser = document.getElementById('switchDowser')
 switchDowser.addEventListener("click", switchDowserClick, false);

 function switchDowserClick() {
     if (switchDowser.checked == true) {
         this.parentElement.querySelector('.title span').innerHTML = 'OPEN';
         this.parentElement.querySelector('.title span').classList.remove('inactive');
         this.parentElement.querySelector('.title span').classList.add('active');
         this.parentElement.classList.add('active')

     } else {
         this.parentElement.querySelector('.title span').innerHTML = 'CLOSED';
         this.parentElement.querySelector('.title span').classList.add('inactive');
         this.parentElement.querySelector('.title span').classList.remove('active');
         this.parentElement.classList.remove('active')
     }
 }

 // change text when Lamp is OPEN/CLOSE in Projector tab

 var switchLamp = document.getElementById('switchLamp')
 switchLamp.addEventListener("click", switchLampClick, false);

 function switchLampClick() {
     if (switchLamp.checked == true) {
         this.parentElement.querySelector('.title span').innerHTML = 'ON';
         this.parentElement.querySelector('.title span').classList.remove('inactive');
         this.parentElement.classList.add('active')

     } else {
         this.parentElement.querySelector('.title span').innerHTML = 'OFF';
         this.parentElement.querySelector('.title span').classList.add('inactive');
         this.parentElement.classList.remove('active')
     }
 }