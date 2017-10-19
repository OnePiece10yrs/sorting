function bubbleSort(arr){

  if(arr.length >= 2){
    //swap
    var total = arr.length;
    for(var i=total; i > 0; i--){
      for(var j=0; j<=i; j++)
      //debugger
        if(arr[j] > arr[j+1]) swap(arr, j);
      total--;
    }
  }
  return arr;
}

function swap(arr, curr){
  arr[curr] = arr[curr] + arr[curr+1];
  arr[curr+1] = arr[curr] - arr[curr+1];
  arr[curr] = arr[curr] - arr[curr+1];
}

