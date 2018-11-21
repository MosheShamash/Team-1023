var r1 = 0
var g1 = 0
var b1 = 150

var r2 = 0
var g2 = 0
var b2 = 150

var r3 = 0
var g3 = 0
var b3 = 150

var blackOrWhite1 = 255
var blackOrWhite2 = 255
var blackOrWhite3 = 255

var pointsWonOrLost1
var pointsWonOrLost2
var pointsWonOrLost3


function eventScreen(event) {

    background(0, 0, 0)
    noFill()
    stroke('EAF4F4')
    strokeWeight(5)
    rect(200, 100, 600, 150)
    rect(210, 110, 580, 130)
    decideHover()
    decide()
    
    fill('EAF4F4')
    noStroke()
    textAlign(CENTER)
    textSize(20)
    text(event.scenario.text, 500, 145)

    fill('EAF4F4')    
    noStroke()
    textAlign(LEFT)

    if(event !== homework ){
        // textSize(15)
        text(Object.keys(event.scenario.option1)[0], 300, 405)
        text(Object.keys(event.scenario.option2)[0], 300, 505)
        text(Object.keys(event.scenario.option3)[0], 300, 605)

        fill(r1, g1, b1)
        ellipse(250, 400, 70)
        fill(blackOrWhite1)
        textSize(50)
        text("A", 232, 418)

        fill(r2, g2, b2)
        ellipse(250, 500, 70)
        fill(blackOrWhite2)
        textSize(50)
        text("B", 232, 518)

        fill(r3, g3, b3)
        ellipse(250, 600, 70)
        fill(blackOrWhite3)
        textSize(50)
        text("C", 232, 618)
    }
    else {
        // textSize(15)
        text(Object.keys(event.scenario.option1)[0], 300, 405)
        text(Object.keys(event.scenario.option2)[0], 300, 505)

        fill(r1, g1, b1)
        ellipse(250, 400, 70)
        fill(blackOrWhite1)
        textSize(50)
        text("A", 232, 418)

        fill(r2, g2, b2)
        ellipse(250, 500, 70)
        fill(blackOrWhite2)
        textSize(50)
        text("B", 232, 518)
    }



    
    // checkEvent()

}

function decideHover(){
    // var distance1 = dist(mouseX, mouseY, 250, 400)
    // var distance2 = dist(mouseX, mouseY, 250, 500)
    // var distance3 = dist(mouseX, mouseY, 250, 600)

    // if(distance1 < 70) {
    //     fill_color = color(255, 255, 255)
    // }

    if(mouseX > 180 && mouseX < 320 && mouseY > 330 && mouseY < 430){
        g1 = 255
        blackOrWhite1 = 0
    }
    else{
        g1 = 0
        blackOrWhite1 = 255
    }

    if(mouseX > 180 && mouseX < 320 && mouseY > 430 && mouseY < 530){
        g2 = 255
        blackOrWhite2 = 0
    }
    else{
        g2 = 0
        blackOrWhite2 = 255
    }

    if(mouseX > 180 && mouseX < 320 && mouseY > 530 && mouseY < 630){
        g3 = 255
        blackOrWhite3 = 0
    }
    else{
        g3 = 0
        blackOrWhite3 = 255
    }
}

function decide() {
    if(mouseIsPressed && mouseX > 180 && mouseX < 320 && mouseY > 330 && mouseY < 430){
        explain_screen = true
        event_screen = false
        explain_text = which_event.scenario.explain1.text
        pointsWonOrLost1 = Object.values(which_event.scenario.option1)[0]
        mike.affectScore(pointsWonOrLost1)
        gameScore = mike.score
        console.log(gameScore)
        console.log(mike.score)
    }

    if(mouseIsPressed && mouseX > 180 && mouseX < 320 && mouseY > 430 && mouseY < 530){
        explain_screen = true
        event_screen = false
        explain_text = which_event.scenario.explain2.text
        pointsWonOrLost2 = Object.values(which_event.scenario.option2)[0]
        mike.affectScore(pointsWonOrLost2)

    }

    if(mouseIsPressed && mouseX > 180 && mouseX < 320 && mouseY > 530 && mouseY < 630){
        explain_screen = true
        event_screen = false
        explain_text = which_event.scenario.explain3.text
        pointsWonOrLost3 = Object.values(which_event.scenario.option3)[0]
        mike.affectScore(pointsWonOrLost3)

    }

}


// function checkEvent() {

// }