const { expect } = require('chai');
const { assert } = require('chai');
const mergeSort = require('../scripts/mergeSort.js');

describe('mergeSort', () => {
  it('should be a function', () => {
    assert.isFunction(mergeSort);
  })

})
