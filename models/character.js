class Character{
    constructor(name, speed, positionX , positionY){
        this.name = name
        this.health = 5
        this.speed = speed
        this.positionX = positionX
        this.positionY = positionY
    }
     
    moveUp(){}
    moveDown(){}
    moveLeft(){}
    moveRight(){}
    affectHealth(value){
        this.health+=value
    }
    

}
module.exports = character