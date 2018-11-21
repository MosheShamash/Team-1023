var rButton1 = 0
var gButton1 = 0
var bButton1 = 255

function gameOverScreen() {
    background(0)
    playAgainHover()
    playAgain()

    fill(rButton1, gButton1, bButton1)
    rect(400, 568, 200, 50)

    fill(255)
    textSize(50)
    text("Game Over!! you scored " + gameScore, 500, 400)

    textSize(30)
    fill(blackOrWhite5)
    text("Play Again", 500, 600)
    playAgain()
}

function playAgainHover() {
    if(mouseX >= 400 && mouseX <= 600 && mouseY >= 568 && mouseY <= 718){
        blackOrWhite5 = 0
        bButton1 = 0
        gButton1 = 255
    }
    else{
        blackOrWhite5 = 255
        bButton1 = 255
        gButton1 = 0
    }
}

function playAgain() {
    if(mouseIsPressed && mouseX >= 400 && mouseX <= 600 && mouseY >= 568 && mouseY <= 718){
        mike.score = 0
        game_screen = true
        event_screen = false
        explain_screen = false
        isGameOver = false
    }
}