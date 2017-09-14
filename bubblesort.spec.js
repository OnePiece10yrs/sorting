describe('Bubble Sort', function(){
  beforeAll(function(){
    spyOn(window, 'swap').and.callThrough();
  });
  it('handles an empty array', function(){
    expect(bubbleSort([]) ).toEqual( [] );
    expect(window.swap.calls.count()).toEqual(0);
  });

  it('handles single items in an array', function(){
    expect(bubbleSort([3])).toEqual([3]);
    expect(window.swap.calls.count()).toEqual(0);
  });

  it('handles two items in an array', function(){
    expect(bubbleSort([50, 42])).toEqual([42, 50]);
    expect(window.swap.calls.count()).toEqual(1);
  });

  it('handles a sorted array', function(){
    expect(bubbleSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(window.swap.calls.count()).toEqual(1);
  });

  it('handles multiple items in an array', function(){
    expect(bubbleSort([3, 5, 2, 7, 1])).toEqual([1, 2, 3, 5, 7]);
    expect(window.swap.calls.count()).toEqual(7);
  });

});
