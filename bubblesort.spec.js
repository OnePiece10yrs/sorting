describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect(bubbleSort([]) ).toEqual( [] );
  });

  it('handles single items in an array', function(){
    expect(bubbleSort([3])).toEqual([3]);
  });

  it('handles multiple items in an array', function(){
    expect(bubbleSort([138, 3, 42, 39, 4])).toEqual([3, 4, 39, 42, 138]);
  });
});
