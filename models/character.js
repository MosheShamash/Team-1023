class Character{
    constructor(name, positionX , positionY){
        this.name = name
        this.score = 0
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
    affectScore(value){
        if(this.score === 0 && value < 0){
            this.score = 0
        }
        else{
        this.score += value
        }
    }
    

}
// module.exports = Character