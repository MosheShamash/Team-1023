
function explainScreen(explanationText) {
    background(13, 220, 255)
    continueButton()
    fill(0)
    textAlign(CENTER)
    text(explanationText, 500, 400)
    console.log(explanationText)
    fill(0, 0, 255)
    rect(800, 700, 100, 50)


    
}

function continueButton() {
    if(mouseIsPressed && mouseX >= 800 && mouseX <= 900 && mouseY >= 700 && mouseY <= 750){
        game_screen = true
        event_screen = false
        explain_screen = false
    }
}