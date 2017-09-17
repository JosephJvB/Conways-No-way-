var test = require('tape')
var createBoard = require('../createBoard')

test('board Gen with right dimensions', (t) => {
    for (var i = 0; i < 7; i++) {
      var board = createBoard(i)
      t.equal(board.length, i, 'enough arrays created')
      t.equal(board[0].length, i, 'enough indexes in each array')
    }
  t.end()
})

test('each row of the returned board is a different array', function(t) {
  var board = createBoard(2)
  t.notEqual(board[0], board[1])
  t.end()
})


//gosh I wish I made these tests myself but Im under pressure to leave so I copied them! I understand them but I want to play with them more when I get time :D

//also it doesnt work yet ya big dummy, cant even C+P right
