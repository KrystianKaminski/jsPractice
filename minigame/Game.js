function Game(selector, boardDimension) {
    this.container = selector ? document.querySelector(selector) :
        document.querySelector('body')


    this.boardDimension = boardDimension
    this.cellDimension = (100 / this.boardDimension) + '%'
    this.playerPosition = {
        x: 1,
        y: 0
    }
    this.gameBoardArray = []
    this.gameBoard = null

    this.init()
}

Game.prototype.init = function () {
    this.makeGameBoard()
    this.makeEmptyGameBoardArray()
    this.placeObstaclesInToGameBoardArray()
    this.placePlayer()
    this.render()
    this.startListeningArrowKeys()
}

Game.prototype.placePlayer = function () {
    this.gameBoardArray[this.playerPosition.y][this.playerPosition.x] = 'X'
}

Game.prototype.makeEmptyGameBoardArray = function () {
    this.gameBoardArray = (
        Array(this.boardDimension)
        .fill(1)
        .map(
            row => Array(this.boardDimension).fill(1)
        )
    )
}


Game.prototype.placeObstaclesInToGameBoardArray = function () {
    this.gameBoardArray = this.gameBoardArray
        .map(row =>
            row.map(cell =>
                Math.random() > 0.25 ? cell : 0
            )
        )
}

Game.prototype.makeGameBoard = function () {
    const boardElement = document.createElement('div')
    boardElement.style.width = '500px'
    boardElement.style.height = '500px'
    boardElement.style.display = 'flex'
    boardElement.style.flexWrap = 'wrap'

    this.gameBoard = boardElement
    this.container.appendChild(boardElement)
}

Game.prototype.checkIfMoveIsAvailable = function (y, x) {
    const playerPosition = this.getPlayerPosition()
    const newPlayerPosition = {
        x: playerPosition.x + x,
        y: playerPosition.y + y
    }


    if (this.gameBoardArray[newPlayerPosition.y] && this.gameBoardArray[newPlayerPosition.y][newPlayerPosition.x]) {
        this.move(newPlayerPosition)
    }
}


Game.prototype.move = function (newPlayerPosition) {
    const playerPosition = this.getPlayerPosition()
    this.gameBoardArray[this.playerPosition.y][this.playerPosition.x] = 1
    this.gameBoardArray[newPlayerPosition.y][newPlayerPosition.x] = 'X'
    this.render()

}

Game.prototype.startListeningArrowKeys = function () {
    window.addEventListener(
        'keydown',
        event => {
            event.preventDefault()

            switch (event.key) {
                case 'ArrowUp':
                    this.checkIfMoveIsAvailable(-1, 0)
                    break
                case 'ArrowDown':
                    this.checkIfMoveIsAvailable(1, 0)
                    break
                case 'ArrowLeft':
                    this.checkIfMoveIsAvailable(0, -1)
                    break
                case 'ArrowRight':
                    this.checkIfMoveIsAvailable(0, 1)
                    break
            }
        }
    )
}

Game.prototype.render = function () {
    this.gameBoard.innerHTML = ''
    this.gameBoardArray.forEach(row => {
        row.forEach(cell => {
            this.renderSingleCell(cell)
        })
    })
}

Game.prototype.renderSingleCell = function (cell) {
    const cellElement = document.createElement('div')
    cellElement.style.width = this.cellDimension
    cellElement.style.height = this.cellDimension

    switch (cell) {
        case 0:
            cellElement.style.backgroundColor = 'red'
            break
        case 1:
            cellElement.style.backgroundColor = 'grey'
            break
        case 'X':
            cellElement.style.backgroundColor = 'black'
            break
    }
    this.gameBoard.appendChild(cellElement)
}

Game.prototype.getPlayerPosition = function () {
    return this.gameBoardArray
        .reduce(
            (reduced, row, indexOfRow, arr) => {
                const indexOfXInRow = row.indexOf('X')
                if (indexOfRow !== -1) {
                    reduced.x = indexOfXInRow
                    reduced.y = indexOfRow
                }
                return reduced
            }, {}
        )
}