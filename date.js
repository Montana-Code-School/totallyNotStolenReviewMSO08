//Make a Javascript function that logs the current time every 3 seconds.

function date() {
  var currentDate = new Date();
  var time = (currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds());
  console.log(time);
  return time;
}

module.exports = date;
