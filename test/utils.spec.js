const { assert } = require('chai')
const { add } = require('../src/utils')

describe('When calling add() with 2 and 2', () => {
  it('Should answer 4', () => {
    const result = add(2, 2)
    assert.equal(result, 4)
  })
})
