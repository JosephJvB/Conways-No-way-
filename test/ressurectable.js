var test = require('tape')
var ressurectable = require('../ressurectable')

test('cell lives if ressurectable', (t) => {
  var expecteds = {
    0: false,
    1: false,
    2: false,
    3: true,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false
    }

    Object.keys(expecteds).forEach(function(input){
      var expected = expecteds[input]
      var actual = ressurectable(input)

      var message = 'cell count ' + input + ' is ' +
      (expected ? 'ressurectable' : 'not ressurectable')
      t.equal(expected, actual, message)
    })
    t.end()
})
