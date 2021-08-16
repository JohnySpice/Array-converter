var assert = require('assert');
const convert = require('../index')
describe('Convert', function() {
  it('test 1', async function() {
    assert.strictEqual(await convert([1,2,3,4,5,6,7,8]), "1-8");
    })
  it('test 2', async function() {
    assert.strictEqual(await convert([1,2,4]), '1,2,4')
      })
  it('test 3', async function() {
    assert.strictEqual(await convert([1,2,3,4,5,6,7,8]), '1-8')
      })
  it('test 4', async function() {
    assert.strictEqual(await convert([1,3,4,5,6,7,8] ), '1,3-8')
      })
  it('test 5', async function() {
    assert.strictEqual(await convert([1,3,4,5,6,7,8,10,11,12]), "1,3-8,10-12")
      })
  it('test 6', async function() {
    assert.strictEqual(await convert([1,2,3]), "1-3")})
  it('test 7', async function() {
    assert.strictEqual(await convert([1,2]), '1,2')
      })
  it('test 8', async function() {
    assert.strictEqual(await convert([1,2,4] ), "1,2,4")
      })
  it('test 9', async function() {
    assert.strictEqual(await convert([1,2,4,5,6]), "1,2,4-6")
      })
  it('test 10', async function() {
    assert.strictEqual(await convert([1,2,3,7,8,9,15,17,19,20,21]), "1-3,7-9,15,17,19-21")
      })
  it('test 11', async function() {
    assert.strictEqual(await convert([1,2,3,4,5,6,100,1091,1999,2000,2001,2002]), "1-6,100,1091,1999-2002")
      })
  it('test 12', async function() {
    assert.strictEqual(await convert([1]), "1")
      })
  it('test 13', async function() {
    assert.strictEqual(await convert([1,3,5,7,9,11]), "1,3,5,7,9,11")
      })
})
