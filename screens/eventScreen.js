var r1 = 0
var g1 = 0
var b1 = 150

var r2 = 0
var g2 = 0
var b2 = 150

var r3 = 0
var g3 = 0
var b3 = 150


function eventScreen(event) {

    background(120, 350, 150)
    noFill()
    stroke(0, 0, 255)
    strokeWeight(5)
    rect(200, 100, 600, 150)
    decideHover()
    decide()
    
    fill(0)
    noStroke()
    textAlign(CENTER)
    textSize(20)
    text(event.scenario.text, 500, 140)

    fill(0)
    noStroke()
    textAlign(LEFT)

    if(event !== homework ){
        // textSize(15)
        text(Object.keys(event.scenario.option1)[0], 300, 405)
        text(Object.keys(event.scenario.option2)[0], 300, 505)
        text(Object.keys(event.scenario.option3)[0], 300, 605)

        fill(r1, g1, b1)
        ellipse(250, 400, 70)
        fill(r2, g2, b2)
        ellipse(250, 500, 70)
        fill(r3, g3, b3)
        ellipse(250, 600, 70)
    }
    else {
        // textSize(15)
        text(Object.keys(event.scenario.option1)[0], 300, 405)
        text(Object.keys(event.scenario.option2)[0], 300, 505)

        fill(r1, g1, b1)
        ellipse(250, 400, 70)
        fill(r2, g2, b2)
        ellipse(250, 500, 70)
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
    }
    else{
        g1 = 0
    }

    if(mouseX > 180 && mouseX < 320 && mouseY > 430 && mouseY < 530){
        g2 = 255
    }
    else{
        g2 = 0
    }

    if(mouseX > 180 && mouseX < 320 && mouseY > 530 && mouseY < 630){
        g3 = 255
    }
    else{
        g3 = 0
    }
}

function decide() {
    if(mouseIsPressed && mouseX > 180 && mouseX < 320 && mouseY > 330 && mouseY < 430){
        explainScreen(option1)
    }

    if(mouseIsPressed && mouseX > 180 && mouseX < 320 && mouseY > 430 && mouseY < 530){
        explainScreen(option2)
    }

    if(mouseIsPressed && mouseX > 180 && mouseX < 320 && mouseY > 530 && mouseY < 630){
        explainScreen(option3)
    }

}


// function checkEvent() {

// }