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
var playGame = new Event("Play Game", playGameScenario, 650, 100)
var socialNetwork = new Event("Social Network", socialNetworkScenario, 100, 700)
var spendTimeOffline = new Event("Spend Time Offline", spendTimeOfflineScenario, 650, 700)
var homework = new Event("Homework", homeworkScenario, 650, 400)




var game_screen = true
var event_screen = false
var explain_screen = false
var which_event
var explain_text
var gameScore
var scoreText
var imageWidth = 50



    
function setup() {
    createCanvas(1000, 800)
    background(120, 150, 350)
    postOnlineImage = loadImage("Post-online-picture-400x321.jpg")
    // playGameImage = loadImage("https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjs26Df2uDeAhVpIcAKHZQ9BJ4QjRx6BAgBEAU&url=https%3A%2F%2Folhardigital.com.br%2Fgames-e-consoles%2Fnoticia%2Fgoogle-pode-oferecer-demos-de-jogos-pagos-no-android%2F62740&psig=AOvVaw2Ssm83YXZasVzO-_2zvdMB&ust=1542725554854993")
    // socialNetworkImage = loadImage("https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwidkZCA2-DeAhXKccAKHeMSAhIQjRx6BAgBEAU&url=https%3A%2F%2Fwww.kisspng.com%2Fpng-social-media-youtube-facebook-f8-social-network-fa-4044625%2F&psig=AOvVaw3vKI31r2EGAUSJcptL4QHM&ust=1542725599552727")
    // spendTimeOfflineImage = loadImage("https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwisyJq12-DeAhXsAcAKHY2kAqYQjRx6BAgBEAU&url=http%3A%2F%2Fwww.inclusiveplay.com%2F&psig=AOvVaw1PmpiehOiD_6Y5uRA4KAUY&ust=1542725713287298")
    // homeworkImage = loadImage("https://www.googljbhedrkifrvlfvvierrhdnvfrdhdubdntgcrbtiiuuhgvtvhvgjdjicgnlfrvjgne.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiuxcLk2-DeAhWrIMAKHdI6CogQjRx6BAgBEAU&url=http%3A%2F%2Fwww.haguebar.derbyshire.sch.uk%2Fhomework%2F&psig=AOvVaw1sVqo0ehZw3MGH-M-4brYx&ust=1542725779091273")
}

function draw() {
    selectScreen()
    
}

function gameScreen(){
    image(postOnlineImage, postOnline.positionX, postOnline.positionY)
    move()
    checkCollision()
    background(120, 150, 350)
    ellipse(mike.positionX, mike.positionY, 30)
    noStroke()
    fill(200, 255, 250)
    rect(postOnline.positionX, postOnline.positionY, imageWidth, imageWidth)
    rect(playGame.positionX, playGame.positionY, imageWidth, imageWidth)
    rect(socialNetwork.positionX, socialNetwork.positionY, imageWidth, imageWidth)
    rect(spendTimeOffline.positionX, spendTimeOffline.positionY, imageWidth, imageWidth)
    rect(homework.positionX, homework.positionY, imageWidth, imageWidth)
    gameScore = mike.score
    scoreText = "Score: " + gameScore
    fill(0)
    textSize(20)
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
}
function checkCollision() {
    if(mike.positionX >= postOnline.positionX && mike.positionX <= (postOnline.positionX + imageWidth) && mike.positionY >= postOnline.positionY && mike.positionY <= postOnline.positionY + 50){
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