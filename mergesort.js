function mergeSort(arr){

  if (arr.length <= 1)
    return arr;

  //split
  var sArr = mSplit(arr);

  //merge
  arr = mMerge( mergeSort(sArr[0]), mergeSort(sArr[1]));

  return arr;
}

function mSplit(wArr){
  var half = Math.ceil(wArr.length / 2);

  return ([wArr.slice(0, half), wArr.slice(half)]);
}

function mMerge(arr1, arr2){

  var result=[];

   for(var i1=0, i2=0; i1 < arr1.length && i2 < arr2.length; )
   {
    if ( arr1[i1] < arr2[i2]){
      result.push(arr1[i1++]);
    } else {
      result.push(arr2[i2++]);
    }
  }

  return result.concat(arr1.slice(i1)).concat(arr2.slice(i2));

}
