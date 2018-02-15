//Make a Javascript function that logs the current time every 3 seconds.

function date() {
  setInterval(function() {
    var currentHours = new Date().getHours();
    var currentMinutes = new Date().getMinutes();
    var currentSeconds = new Date().getSeconds();
    if (currentMinutes < 10) {
      currentMinutes = "0" + currentMinutes;
    }
    if (currentSeconds < 10) {
      currentSeconds = "0" + currentSeconds;
    }
    var time = (currentHours + ":" + currentMinutes + ":" + currentSeconds);
    console.log(time);
    return time;
  }, 3000);
}

module.exports = date;
