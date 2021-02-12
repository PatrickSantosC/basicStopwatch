//! Selectors
const viewfinder = document.querySelector('[data-js="viewfinder"');
const startBtn = document.querySelector('[data-js="start"');
const stopBtn = document.querySelector('[data-js="stop"');

//! Constant and variable
let timer;
let init = false;

//! EventListener
startBtn.addEventListener('click', startStopwatch)
stopBtn.addEventListener('click', stopStopwatch)

//! Functions
function startStopwatch(){
  let miliseconds = 0, seconds = 0, minutes = 0, hours = 0;

  if(init === false){
    timer = setInterval(() => {
      if(miliseconds > 100){
        seconds++
        miliseconds = 0
        if(seconds > 60){
          minutes++
          seconds = 0
          if(minutes > 60){
            hours++
            minutes = 0
          }
        }
      }

      miliseconds++

      let milisecondsFormat = miliseconds < 10 ? `0${miliseconds}` : miliseconds
      let secondsFormat = seconds < 10 ? `0${seconds}` : seconds
      let minutesFormat = minutes < 10 ? `0${minutes}` : minutes
      let hoursFormat = hours < 10 ? `0${hours}` : hours

      viewfinder.innerHTML = `${hoursFormat}:${minutesFormat}:${secondsFormat}<span>${milisecondsFormat}</span>`
    }, 10)

    init = true
  }
}

function stopStopwatch(){
  init = false
  clearInterval(timer)
  viewfinder.innerHTML = `00:00:00<span>00</span>`
}
