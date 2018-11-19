class Character{
    constructor(name, positionX , positionY){
        this.name = name
        this.health = 5
        this.speed = 0
        this.positionX = positionX
        this.positionY = positionY
    }
     
    moveUp(){
        this.positionY -= 5
    }
    moveDown(){
        this.positionY += 5

    }
    moveLeft(){
        this.positionX -= 5

    }
    moveRight(){
        this.positionX += 5

    }
    affectHealth(value){
        this.health+=value
    }
    

}
// module.exports = Character