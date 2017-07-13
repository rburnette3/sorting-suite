const { expect } = require('chai');
const { assert } = require('chai');
const quickSort = require('../scripts/quickSort.js');

describe('quickSort', () => {
  it('should be a function', () => {
    assert.isFunction(quickSort);
  })

  it('should sort arrays of numbers', () => {
    const array = [2, 1, 4, 3, 6, 5];

    expect(quickSort(array)).to.deep.equal([1, 2, 3, 4, 5, 6])
  })

  it('should also be able to sort letter arrays', () =>{
    const array = ['a', 's', 'z', 'x', 'c'];

    expect(quickSort(array)).to.deep.equal(['a', 'c', 's', 'x', 'z'])
  })

  it('should be able to sort negative numbers', () => {
    const array = [-3, -1, -7, -5, -4];

    expect(quickSort(array)).to.deep.equal([-7, -5, -4, -3, -1])
  })

  it('should sort arrays of large numbers', () => {
    const array = [];

    for (let i = 0; i < 249720; i++) {
      let randomNumber = Math.ceil(Math.random() * 500);

      array.push(randomNumber)
    }
    const copyArray = Array.from(array);

    expect(quickSort(array)).to.deep.equal(copyArray.sort(function(a, b) {
      return a - b
    }))
  })
})
