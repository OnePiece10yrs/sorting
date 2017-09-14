var bubbleSort = function(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  var swapTracker = true;

  while(swapTracker){
    swapTracker = false;
    for (var i = 0; i < arr.length; i+=2) {
      if (arr[i] > arr[i+1]) {
       swap(arr, i);
       swapTracker = true;
      }
    }

    return arr
}
};

var swap = function(arr, i) {
  var temp;


      temp = arr[i];
      arr[i] = arr[i+1];
      arr[i+1] = temp;


};
