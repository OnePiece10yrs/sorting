var counter = 0;
var bubbleSort = function(arr) {
  var swapTracker = true;
  if (arr.length <= 1) {
    return arr;
  }
<<<<<<< HEAD

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


=======
  while (swapTracker){
    // debugger;
    swapTracker = false;
    for (var i = 0; i < arr.length-1; i++){
      if (arr[i] > arr[i+1]) {
        swap(arr, i);
        swapTracker = true;
      }
    }
  }

  return arr;
>>>>>>> aad2081ac6788cea256f9536bb3d3446d416e364
};

var swap = function(arr, i) {
  var temp;

  temp = arr[i];
  arr[i] = arr[i+1];
  arr[i+1] = temp;
  counter++;
};

console.log(counter);
