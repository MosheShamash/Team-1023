var rButton1 = 0
var gButton1 = 0
var bButton1 = 255

var change_color

function gameOverScreen() {
    background(0)
    playAgainHover()
    playAgain()

    image(gameOverImage, 0, 0, 1000, 800)

    // fill(rButton1, gButton1, bButton1)
    noFill()
    stroke(change_color)
    rect(400, 568, 200, 50, 20)
    noStroke()

    fill(255)
    textSize(50)
    text("You scored " + gameScore, 500, 500)

    textSize(30)
    fill(change_color)
    text("Play Again", 500, 600)
    playAgain()
}

function playAgainHover() {
    if(mouseX >= 400 && mouseX <= 600 && mouseY >= 568 && mouseY <= 718){
        change_color = 255
    }
    else{
        change_color = '#20A4F3'
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