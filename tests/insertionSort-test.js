const { expect } = require('chai');
const { assert } = require('chai');
const insertionSort = require('../scripts/insertionSort.js');

describe('insertionSort', () => {
  it('should be a function', () => {
    assert.isFunction(insertionSort);
  })

})
