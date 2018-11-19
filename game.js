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

function setup() {
    createCanvas(800, 800)
    background(120, 150, 350)
    // postOnlineImage = loadImage("Post-online-picture-400x321.jpg")
    // playGameImage = loadImage("https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjs26Df2uDeAhVpIcAKHZQ9BJ4QjRx6BAgBEAU&url=https%3A%2F%2Folhardigital.com.br%2Fgames-e-consoles%2Fnoticia%2Fgoogle-pode-oferecer-demos-de-jogos-pagos-no-android%2F62740&psig=AOvVaw2Ssm83YXZasVzO-_2zvdMB&ust=1542725554854993")
    // socialNetworkImage = loadImage("https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwidkZCA2-DeAhXKccAKHeMSAhIQjRx6BAgBEAU&url=https%3A%2F%2Fwww.kisspng.com%2Fpng-social-media-youtube-facebook-f8-social-network-fa-4044625%2F&psig=AOvVaw3vKI31r2EGAUSJcptL4QHM&ust=1542725599552727")
    // spendTimeOfflineImage = loadImage("https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwisyJq12-DeAhXsAcAKHY2kAqYQjRx6BAgBEAU&url=http%3A%2F%2Fwww.inclusiveplay.com%2F&psig=AOvVaw1PmpiehOiD_6Y5uRA4KAUY&ust=1542725713287298")
    // homeworkImage = loadImage("https://www.googljbhedrkifrvlfvvierrhdnvfrdhdubdntgcrbtiiuuhgvtvhvgjdjicgnlfrvjgne.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiuxcLk2-DeAhWrIMAKHdI6CogQjRx6BAgBEAU&url=http%3A%2F%2Fwww.haguebar.derbyshire.sch.uk%2Fhomework%2F&psig=AOvVaw1sVqo0ehZw3MGH-M-4brYx&ust=1542725779091273")
}

function draw() {
    // image(postOnlineImage, postOnline.positionX, postOnline.positionY)
    move()
    background(120, 150, 350)
    ellipse(mike.positionX, mike.positionY, 30)
    rect(postOnline.positionX, postOnline.positionY, 50, 50)
    rect(playGame.positionX, playGame.positionY, 50, 50)
    rect(socialNetwork.positionX, socialNetwork.positionY, 50, 50)
    rect(spendTimeOffline.positionX, spendTimeOffline.positionY, 50, 50)
    rect(homework.positionX, homework.positionY, 50, 50)
    
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