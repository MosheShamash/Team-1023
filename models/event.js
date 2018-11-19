class Event{
    constructor(type, scenario, positionX, positionY){

        this.type = type
        this.scenario = scenario
        this.positionX = positionX
        this.positionY = positionY
    }
    isCharacterAtEvent(){
        if((mike.positionX == this.positionX)&&(mike.positionY==this.positonY)){
            this.showScenario()
        }
    }
    showScenario(){

     console.log(scenario.text) 
     this.showOutcome()

    }
    showOutcome(){
        console.log('pick')
    }
    decision(option){
        var decision = Object.values(option)
        mike.affectHealth(decision[0])
    }
    

}
module.exports=event