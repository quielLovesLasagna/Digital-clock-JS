"use strict";

// Elements
const hrs = document.getElementById("hrs");
const min = document.getElementById("min");
const sec = document.getElementById("sec");
// End of Elements

// Function
// Format time
const formatTime = (time) => (time < 10 ? `0${time}` : time);

const dateTime = () => {
  // Get current date
  const currTime = new Date();

  // Get current hour, minute, second
  const hour = formatTime(currTime.getHours());
  const minute = formatTime(currTime.getMinutes());
  const second = formatTime(currTime.getSeconds());

  // Display time on clock
  hrs.innerHTML = hour;
  min.innerHTML = minute;
  sec.innerHTML = second;
};
// End of Function

// Invoke dateTime func/1sec
setInterval(() => dateTime(), 1000);
