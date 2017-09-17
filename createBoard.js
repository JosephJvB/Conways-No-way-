function createBoard(size) {
  var board = []
  for (var i = 0; i < size.length; i++) {
    board.push(Array(size).fill(false))
  }
  return board
}

module.exports = createBoard
