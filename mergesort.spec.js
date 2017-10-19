describe('Merge Sort', function(){
  beforeAll(function(){
    spyOn(window, 'split').and.callThrough();
  });

  it('Handle empty arrary', function(){
    expect(mergeSort([])).toEqual([]);
  });

  it('handles single items in an array', function(){
    expect(mergeSort([3])).toEqual([3]);
    //expect(swap.calls.count()).toEqual(0);
  });

  it('handles two items in an array', function(){
    expect(mergeSort([50, 42])).toEqual([42, 50]);
    //expect(swap.calls.count()).toEqual(1);
  });

  it('handles a sorted array', function(){
    expect(mergeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    //expect(swap.calls.count()).toEqual(1);
  });

  it('handles multiple items in an array', function(){
    expect(mergeSort([3, 5, 2, 7, 1])).toEqual([1, 2, 3, 5, 7]);
    //expect(swap.calls.count()).toEqual(7);
  });
});

