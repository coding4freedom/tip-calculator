
class Guns {
    constructor(name, type, magSize, attachments, damage){
        this.name = name
        this.type = type
        this.magSize = magSize
        this.attachments = attachments
        this.damage = damage

        
    }

    register() {
        console.log(`You have register a ${this.type} ${this.name} with a magazine size of ${this.magSize}`)
    }

    getTargetDmgScore(){
        return Math.floor(Math.random() * (100 - 20 + 1))+ 20;
    }

    takeShot(){
        return this.getTargetDmgScore() - this.damage
    }
}

/*
    Sample code to test class objects
*/

//const citizen = new Guns('Mossberg', 'shotgun', ['scope'], 50) 