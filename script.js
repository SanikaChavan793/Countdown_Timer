// Get elements
var timerElement = document.getElementById('timer');
var hoursInput = document.getElementById('hoursInput');
var minutesInput = document.getElementById('minutesInput');
var secondsInput = document.getElementById('secondsInput');
var startButton = document.getElementById('startButton');

// Variables
var interval;
var totalSeconds = 0;

// Format time
function formatTime(time) {
  return time < 10 ? '0' + time : time;
}

// Update timer
function updateTimer() {
  if (totalSeconds <= -1) {
    clearInterval(interval);
    alert('Countdown finished!');
    return;
  }

  var hours = Math.floor(totalSeconds / 3600);
  var minutes = Math.floor((totalSeconds % 3600) / 60);
  var seconds = Math.floor(totalSeconds % 60);

  timerElement.textContent = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);
  totalSeconds--;
}

// Start button click event
startButton.addEventListener('click', function() {
  clearInterval(interval);

  var hours = parseInt(hoursInput.value) || 0;
  var minutes = parseInt(minutesInput.value) || 0;
  var seconds = parseInt(secondsInput.value) || 0;

  totalSeconds = hours * 3600 + minutes * 60 + seconds;

  interval = setInterval(updateTimer, 1000);
});
