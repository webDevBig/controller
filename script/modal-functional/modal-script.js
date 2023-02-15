let modalShutDown = document.getElementById('modal-shutdown');
// hides the modal when the user clicks outside the modal
window.addEventListener('click', function(event) {

  var shutDown = document.getElementById('shutdown')
  shutDown.addEventListener("click", shutDownClick, false);
 
  function shutDownClick() {
    modalShutDown.style.display = 'block';
  }


  // check if the event happened on the modal-background
  if (event.target === modalBackground) {
    // hides the modal
    modalBackground.style.display = 'none';
  }
  // check if the event happened on the modal-background
  if (event.target ===  modalShutDown) {
    // hides the modal
    modalShutDown.style.display = 'none';
  }
});