import { expect } from 'chai';
import C from '../../src/Controllers/Calculator';

describe('calculate', function () {
  it('add', function () {
    let result = C.Sum(5, 2)
    expect(result).equal(7)
  })
})
