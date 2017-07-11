const { expect } = require('chai');
const { assert } = require('chai');
const bubbleSort = require('../scripts/bubbleSort.js');

describe('bubbleSort', () => {
  it('should be a function', () => {
    assert.isFunction(bubbleSort);
  })

})
