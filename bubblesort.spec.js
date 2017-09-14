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


});
