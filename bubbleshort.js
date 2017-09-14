var bubbleSort = function(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  return swap(arr);
};

var swap = function(arr) {
  var temp;
  for (var i = 0; i < arr.length-2; i+=2) {
    if (arr[i] > arr[i+1]) {
      temp = arr[i];
      arr[i] = arr[i+1];
      arr[i+1] = temp;
    }
  }
  return arr;
};
