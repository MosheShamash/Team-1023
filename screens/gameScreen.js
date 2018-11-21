var mike = new Character("Mike", 400, 400)

var postOnlineScenario = new Scenario(postOnlineScenarioText, postOnlineScenarioOption1, postOnlineScenarioOption2, postOnlineScenarioOption3)
var playGameScenario = new Scenario(playGameScenarioText, playGameScenarioOption1, playGameScenarioOption2, playGameScenarioOption3)
var socialNetworkScenario = new Scenario(socialNetworkScenarioText, socialNetworkScenarioOption1, socialNetworkScenarioOption2, socialNetworkScenarioOption3)
var spendTimeOfflineScenario = new Scenario(spendTimeOfflineScenarioText, spendTimeOfflineScenarioOption1, spendTimeOfflineScenarioOption2, spendTimeOfflineScenarioOption3)
var homeworkScenario = new Scenario(homeworkScenarioText, homeworkScenarioOption1, homeworkScenarioOption2)

var postOnline = new Event("Post Online", postOnlineScenario, 100, 100)
var playGame = new Event("Play Game", playGameScenario, 650, 100)
var socialNetwork = new Event("Social Network", socialNetworkScenario, 100, 700)
var spendTimeOffline = new Event("Spend Time Offline", spendTimeOfflineScenario, 650, 700)
var homework = new Event("Homework", homeworkScenario, 650, 400)

var postOnlineOption1Explanation = new Explain(postOnlineOption1ExplanationText)
var postOnlineOption2Explanation = new Explain(postOnlineOption2ExplanationText)
var postOnlineOption3Explanation = new Explain(postOnlineOption3ExplanationText)

var game_screen = true
var event_screen = false
var explain_screen = false
var which_event



    
function setup() {
    createCanvas(1000, 800)
    background(120, 150, 350)
     postOnlineImage = loadImage("images/facebook.png")
    characterImage= loadImage('images/character.png')
    backgroundImage= loadImage('images/background.jpg')
    playGameImage = loadImage("images/game.png")
    socialNetworkImage = loadImage("images/ig.png")
    spendTimeOfflineImage = loadImage("images/Shutdown.png")
    homeworkImage = loadImage("images/homework.png")
}

function draw() {
    selectScreen()
    
}

function gameScreen(){
    // image(postOnlineImage, postOnline.positionX, postOnline.positionY)
    move()
    checkCollision()
    background(backgroundImage)
    image(characterImage,mike.positionX, mike.positionY, 50,50)
    image(postOnlineImage,postOnline.positionX, postOnline.positionY, 50, 50)
    image(playGameImage,playGame.positionX, playGame.positionY, 50, 50)
    image(socialNetworkImage,socialNetwork.positionX, socialNetwork.positionY, 50, 50)
    image(spendTimeOfflineImage,spendTimeOffline.positionX, spendTimeOffline.positionY, 50, 50)
    image(homeworkImage,homework.positionX, homework.positionY, 50, 50)
}

function move() {
    if(keyIsDown(UP_ARROW)){
        mike.moveUp()
    }
    if(keyIsDown(DOWN_ARROW)){
        mike.moveDown()
    }
    if(keyIsDown(LEFT_ARROW)){
        mike.moveLeft()
    }
    if(keyIsDown(RIGHT_ARROW)){
        mike.moveRight()
    }
}

function selectScreen() {
    if(game_screen){
        gameScreen()
    }
    if(event_screen){
        eventScreen(which_event)
    }
    if(explain_screen){
        explainScreen()
    }
}
function checkCollision() {
    if(mike.positionX >= postOnline.positionX && mike.positionX <= (postOnline.positionX + 50) && mike.positionY >= postOnline.positionY && mike.positionY <= postOnline.positionY + 50){
        console.log("hi")
        game_screen = false
        event_screen = true
        which_event = postOnline
        mikeToCenter()
        
    }

    if(mike.positionX >= playGame.positionX && mike.positionX <= (playGame.positionX + 50) && mike.positionY >= playGame.positionY && mike.positionY <= playGame.positionY + 50){
        // eventScreen(playGame)
        console.log("hi")
        game_screen = false
        event_screen = true
        which_event = playGame
        mikeToCenter()
    }

    if(mike.positionX >= socialNetwork.positionX && mike.positionX <= (socialNetwork.positionX + 50) && mike.positionY >= socialNetwork.positionY && mike.positionY <= socialNetwork.positionY + 50){
        // eventScreen(socialNetwork)
        console.log("hi")
        game_screen = false
        event_screen = true
        which_event = socialNetwork
        mikeToCenter()
    }

    if(mike.positionX >= spendTimeOffline.positionX && mike.positionX <= (spendTimeOffline.positionX + 50) && mike.positionY >= spendTimeOffline.positionY && mike.positionY <= spendTimeOffline.positionY + 50){
        // eventScreen(spendTimeOffline)
        console.log("hi")
        game_screen = false
        event_screen = true
        which_event = spendTimeOffline
        mikeToCenter()
    }

    if(mike.positionX >= homework.positionX && mike.positionX <= (homework.positionX + 50) && mike.positionY >= homework.positionY && mike.positionY <= homework.positionY + 50){
        // eventScreen(homework)
        console.log("hi")
        game_screen = false
        event_screen = true
        which_event = homework
        mikeToCenter()
    }
}

function mikeToCenter(){
    mike.positionX = 400
    mike.positionY = 400
}