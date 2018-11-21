var mike = new Character("Mike", 400, 400)

var postOnlineOption1Explanation = new Explain(postOnlineOption1ExplanationText)
var postOnlineOption2Explanation = new Explain(postOnlineOption2ExplanationText)
var postOnlineOption3Explanation = new Explain(postOnlineOption3ExplanationText)

var playGameOption1Explanation = new Explain(playGameOption1ExplanationText)
var playGameOption2Explanation = new Explain(playGameOption2ExplanationText)
var playGameOption3Explanation = new Explain(playGameOption3ExplanationText)

var socialNetworkOption1Explanation = new Explain(socialNetworkOption1ExplanationText)
var socialNetworkOption2Explanation = new Explain(socialNetworkOption2ExplanationText)
var socialNetworkOption3Explanation = new Explain(socialNetworkOption3ExplanationText)

var spendTimeOfflineOption1Explanation = new Explain(spendTimeOfflineOption1ExplanationText)
var spendTimeOfflineOption2Explanation = new Explain(spendTimeOfflineOption2ExplanationText)
var spendTimeOfflineOption3Explanation = new Explain(spendTimeOfflineOption3ExplanationText)

var homeworkOption1Explanation = new Explain(homeworkOption1ExplanationText)
var homeworkOption2Explanation = new Explain(homeworkOption2ExplanationText)
var homeworkOption3Explanation = new Explain(homeworkOption3ExplanationText)

var postOnlineScenario = new Scenario(postOnlineScenarioText, postOnlineScenarioOption1, postOnlineScenarioOption2, postOnlineScenarioOption3, postOnlineOption1Explanation, postOnlineOption2Explanation, postOnlineOption3Explanation)
var playGameScenario = new Scenario(playGameScenarioText, playGameScenarioOption1, playGameScenarioOption2, playGameScenarioOption3, playGameOption1Explanation, playGameOption2Explanation, playGameOption3Explanation)
var socialNetworkScenario = new Scenario(socialNetworkScenarioText, socialNetworkScenarioOption1, socialNetworkScenarioOption2, socialNetworkScenarioOption3, socialNetworkOption1Explanation, socialNetworkOption2Explanation, socialNetworkOption3Explanation)
var spendTimeOfflineScenario = new Scenario(spendTimeOfflineScenarioText, spendTimeOfflineScenarioOption1, spendTimeOfflineScenarioOption2, spendTimeOfflineScenarioOption3, spendTimeOfflineOption1Explanation, spendTimeOfflineOption2Explanation, spendTimeOfflineOption3Explanation)
var homeworkScenario = new Scenario(homeworkScenarioText, homeworkScenarioOption1, homeworkScenarioOption2, homeworkScenarioOption3, homeworkOption1Explanation, homeworkOption2Explanation, homeworkOption3Explanation)

var postOnline = new Event("Post Online", postOnlineScenario, 100, 100)
var playGame = new Event("Play Game", playGameScenario, 450, 160)
var socialNetwork = new Event("Social Network", socialNetworkScenario, 100, 400)
var spendTimeOffline = new Event("Spend Time Offline", spendTimeOfflineScenario, 550, 620)
var homework = new Event("Homework", homeworkScenario, 750, 400)




var game_screen = true
var event_screen = false
var explain_screen = false
var isGameOver = false
var which_event
var explain_text
var gameScore
var scoreText
var imageWidth = 100




    
function setup() {
    createCanvas(1000, 800)
    background(120, 150, 350)

     postOnlineImage = loadImage("images/post.png")
    characterImage= loadImage('images/character1.png')
    backgroundImage= loadImage('images/background.png')

    playGameImage = loadImage("images/game.png")
    socialNetworkImage = loadImage("images/ig.png")
    spendTimeOfflineImage = loadImage("images/Shutdown.png")
    homeworkImage = loadImage("images/homework.png")
    scenarioBackgroundImage = loadImage("images/scenario-background.jpg")
}

function draw() {
    selectScreen()
    isTheGameOver()
    
}

function gameScreen(){
    // image(postOnlineImage, postOnline.positionX, postOnline.positionY)
    move()
    checkCollision()

    background(backgroundImage)
    image(characterImage,mike.positionX, mike.positionY, imageWidth,imageWidth)
    image(postOnlineImage,postOnline.positionX, postOnline.positionY,  imageWidth, imageWidth)
    image(playGameImage,playGame.positionX, playGame.positionY,  imageWidth,  imageWidth)
    image(socialNetworkImage,socialNetwork.positionX, socialNetwork.positionY,  imageWidth,  imageWidth)
    image(spendTimeOfflineImage,spendTimeOffline.positionX, spendTimeOffline.positionY,  imageWidth,  imageWidth)
    image(homeworkImage,homework.positionX, homework.positionY,  imageWidth,  imageWidth)

    gameScore = mike.score
    scoreText = "Score: " + gameScore
    fill(255)
    textSize(30)
    text(scoreText, 50, 50)
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
        explainScreen(explain_text)
    }

    if(isGameOver){
        gameOverScreen()
    }
}

function isTheGameOver(){
    if(gameScore == 4){
        isGameOver = true
    }
}

function checkCollision() {
    if(mike.positionX >= postOnline.positionX && mike.positionX <= (postOnline.positionX + imageWidth) && mike.positionY >= postOnline.positionY && mike.positionY <= postOnline.positionY +  imageWidth){
        console.log("hi")
        game_screen = false
        event_screen = true
        which_event = postOnline
        mikeToCenter()
        
    }

    if(mike.positionX >= playGame.positionX && mike.positionX <= (playGame.positionX + imageWidth) && mike.positionY >= playGame.positionY && mike.positionY <= playGame.positionY + imageWidth){
        // eventScreen(playGame)
        console.log("hi")
        game_screen = false
        event_screen = true
        which_event = playGame
        mikeToCenter()
    }

    if(mike.positionX >= socialNetwork.positionX && mike.positionX <= (socialNetwork.positionX + imageWidth) && mike.positionY >= socialNetwork.positionY && mike.positionY <= socialNetwork.positionY + imageWidth){
        // eventScreen(socialNetwork)
        console.log("hi")
        game_screen = false
        event_screen = true
        which_event = socialNetwork
        mikeToCenter()
    }

    if(mike.positionX >= spendTimeOffline.positionX && mike.positionX <= (spendTimeOffline.positionX + imageWidth) && mike.positionY >= spendTimeOffline.positionY && mike.positionY <= spendTimeOffline.positionY + imageWidth){
        // eventScreen(spendTimeOffline)
        console.log("hi")
        game_screen = false
        event_screen = true
        which_event = spendTimeOffline
        mikeToCenter()
    }

    if(mike.positionX >= homework.positionX && mike.positionX <= (homework.positionX + imageWidth) && mike.positionY >= homework.positionY && mike.positionY <= homework.positionY + imageWidth){
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