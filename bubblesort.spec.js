describe('Bubble Sort', function(){
  beforeAll(function(){
    //chain spyOn(obj, 'method') and callThrough will track all calls and its implementation
    spyOn(window, 'swap').and.callThrough();
  })
  it('Handle empty array', function(){
    expect(bubbleSort([])).toEqual([]);
  });

  it('handles single items in an array', function(){
    expect(bubbleSort([3])).toEqual([3]);
    expect(swap.calls.count()).toEqual(0);
  });

  it('handles two items in an array', function(){
    expect(bubbleSort([50, 42])).toEqual([42, 50]);
    expect(swap.calls.count()).toEqual(1);
  });

  it('handles a sorted array', function(){
    expect(bubbleSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(swap.calls.count()).toEqual(1);
  });

  it('handles multiple items in an array', function(){
    expect(bubbleSort([3, 5, 2, 7, 1])).toEqual([1, 2, 3, 5, 7]);
    expect(swap.calls.count()).toEqual(7);
  });
});
