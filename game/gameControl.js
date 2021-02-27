let xpos = document.querySelector('#xpos')
let ypos = document.querySelector('#ypos')

let _event = document.querySelector('#event')
let game = document.querySelector('#game')

const map = [
    ['X','X','','',''],
    ['','X','','X',''],
    ['','X','','X','X'],
    ['','','','',''],
    ['','X','','X',''],
]

const command = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight']

let desiredStartX = 1
let desiredStartY = 0

let desiredGoalX = 1
let desiredGoalY = 4

if (map[desiredStartX][desiredStartY] == '') {
    xpos.innerHTML = desiredStartX
    ypos.innerHTML = desiredStartY
}

_event.innerHTML = "You landed at starting point."

function move(event) {
    const key = event.key
    let cmd = command.indexOf(key)
    switch(cmd) {
        case 0:
            if (parseInt(xpos.innerHTML) != 0 && map[parseInt(xpos.innerHTML)-1][parseInt(ypos.innerHTML)] != "X") {
                xpos.innerHTML = parseInt(xpos.innerHTML) - 1
                _event.innerHTML = "You go up and it is clear"
            }
            else {
                _event.innerHTML = "Something is preventing you from going upward."
            }
            break
        case 1:
            if (parseInt(xpos.innerHTML) != map.length-1 && map[parseInt(xpos.innerHTML)+1][parseInt(ypos.innerHTML)] != "X") {
                xpos.innerHTML = parseInt(xpos.innerHTML) + 1
                _event.innerHTML = "You go down and it is clear"
            }
            else {
                _event.innerHTML = "Something is preventing you from going downward."
            }
            break
        case 2:
            if (parseInt(ypos.innerHTML) != 0 && map[parseInt(xpos.innerHTML)][parseInt(ypos.innerHTML)-1] != "X") {
                ypos.innerHTML = parseInt(ypos.innerHTML) - 1
                _event.innerHTML = "You go left and it is clear"
            }
            else {
                _event.innerHTML = "Something is preventing you from going left."
            }
            break
        case 3:
            if (parseInt(ypos.innerHTML) != map[parseInt(xpos.innerHTML)].length-1 && map[parseInt(xpos.innerHTML)][parseInt(ypos.innerHTML)+1] != "X") {
                ypos.innerHTML = parseInt(ypos.innerHTML) + 1
                _event.innerHTML = "You go right and it is clear"
            }
            else {
                _event.innerHTML = "Something is preventing you from going right."
            }
            break
        default:
            break
    }
    hasReachGoal()
}

function hasReachGoal() {
    if (parseInt(xpos.innerHTML) == desiredGoalX && parseInt(ypos.innerHTML) == desiredGoalY) {
        _event.innerHTML = "You reach the goal"
        document.removeEventListener('keydown', moveBind)
    }
}

let moveBind = this.move.bind(this)
document.addEventListener('keydown', moveBind)