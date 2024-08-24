const display = document.querySelector('.display');

function displayTime (){
  const time = new Date();
  display.textContent = time.toLocaleTimeString();
}

setInterval(displayTime, 1000);