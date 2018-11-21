var blackOrWhite4 = 255
var rButton = 0
var gButton = 0
var bButton = 255

function explainScreen(explanationText) {
    background(0, 0, 0)
    hoverContinueButton()
    continueButton()
    fill(255)
    textAlign(CENTER)
    textSize(20)
    text(explanationText, 500, 400)

    pointsRecieved()

    fill(rButton, gButton, bButton)
    rect(750, 700, 150, 50)

    fill(blackOrWhite4)
    text("Continue Game", 825, 730)


    
}

function pointsRecieved() {
    if(mike.pointsWonOrLost > 0){
        fill(0, 255, 0)
        text("You got " + mike.pointsWonOrLost + " points!", 200, 100)
    }
    
    if(mike.pointsWonOrLost === 0){
        fill(0, 0, 255)
        text("You didn't get any points", 200, 100)
    }

    if(mike.pointsWonOrLost < 0){
        fill(255, 0, 0)
        text("You lost " + Math.abs(mike.pointsWonOrLost) + " points :(", 200, 100)
        console.log("lost")
    }
}

function hoverContinueButton() {
    if(mouseX >= 750 && mouseX <= 850 && mouseY >= 700 && mouseY <= 750){
        blackOrWhite4 = 0
        bButton = 0
        gButton = 255
    }
    else{
        blackOrWhite4 = 255
        bButton = 255
        gButton = 0
    }
}

function continueButton() {
    if(mouseIsPressed && mouseX >= 800 && mouseX <= 900 && mouseY >= 700 && mouseY <= 750){
        game_screen = true
        event_screen = false
        explain_screen = false
    }
}