var blackOrWhite4 = 255
var rButton = 0
var gButton = 0
var bButton = 255
var changeColor = '#20A4F3'

function explainScreen(explanationText) {
    background(backgroundImage)
    hoverContinueButton()
    continueButton()
    renderImageAndSpeechBox(which_image)
    fill(0)
    textAlign(CENTER)
    textSize(22)
    text(explanationText, 535, 230)

    pointsRecieved()

    // fill(rButton, gButton, bButton)
    // fill(changeColor)
    noFill()
    stroke(changeColor)
    rect(375, 580, 250, 80, 20)
    noStroke()

    textSize(33)
    fill(changeColor)
    textStyle(BOLD)
    text("Continue Game", 500, 630)
    textStyle(NORMAL)



    
}

function renderImageAndSpeechBox(imageChoice) {
    if(imageChoice == 1){
        image(angryAlienImage, 30, 375, 350, 400)
        image(speechBoxImage, 200, 100, 600, 400)
    }
    if(imageChoice == 2){
        image(neutralAlienImage, -30, 275, 375, 400)
        image(speechBoxImage, 200, 100, 600, 400)
    }
    if(imageChoice == 3){
        image(happyAstronautImage, 30, 375, 375, 400)
        image(speechBoxImage, 200, 100, 600, 400)
    }
}

function pointsRecieved() {
    if(mike.pointsWonOrLost > 0){
        image(greenArrowImage, 50, 68, 50, 50)
        fill(0, 255, 0)
        textStyle(BOLD)
        text("You got " + mike.pointsWonOrLost + " points!", 200, 100)
        textStyle(NORMAL)
    }
    
    if(mike.pointsWonOrLost === 0){
        image(blueArrowImage, 50, 68, 50, 50)
        fill(255)
        textStyle(BOLD)
        text("You didn't get any points", 230, 100)
        textStyle(NORMAL)
    }

    if(mike.pointsWonOrLost < 0){
        image(redArrowImage, 50, 68, 50, 50)
        fill(255, 0, 0)
        textStyle(BOLD)
        text("You lost " + Math.abs(mike.pointsWonOrLost) + " points :(", 200, 100)
        textStyle(NORMAL)
    }
}

function hoverContinueButton() {
    if(mouseX >= 375 && mouseX <= 625 && mouseY >= 580 && mouseY <= 660){
        blackOrWhite4 = 0
        bButton = 0
        gButton = 255
        changeColor = 255
    }
    else{
        blackOrWhite4 = 255
        bButton = 255
        gButton = 0
        changeColor = '#20A4F3'
    }
}

function continueButton() {
    if(mouseIsPressed && mouseX >= 375 && mouseX <= 625 && mouseY >= 580 && mouseY <= 660){
        game_screen = true
        event_screen = false
        explain_screen = false
    }
}