//Build a javascript function that iterates over an array of strings and capitalizes the first letter of each string.
//Use tdd to write this.
function array(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substr(1);
  }
  return arr;
};

module.exports = array;
