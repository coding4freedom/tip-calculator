class Target {
    constructor(){
        this.target = this.getTarget();
        this.hitPoints = this.getHitPoints();
    }

    // Randomly selects beast from array and returns that beast
    getTarget() {
        const beasts = ['Crocodile', 'Moose', 'Secretary bird', 'Minotaur', 'Grizzle bear', 'Komodo dragon', "Blue Troll"];
        const randmonBeast = Math.floor(Math.random() * beasts.length);
        return beasts[randmonBeast]
    }

    // creating the hit points for the beast by randomly selecting between two numbers.
    getHitPoints() {
        return Math.floor(Math.random() * (1000 - 350 + 1))+ 350;
    }

    showTargetInfo() {
        console.log(`A ${this.target} has appeared with ${this.hitPoints} HP`)
    }

}

class Guns extends Target{
    constructor(name, type, magSize, damage){
        super();
        this.name = name;
        this.type = type;
        this.magSize = magSize;        
        this.damage = damage;
        this.totalDmg = this.getFireWpn(); 
        this.outcome = this.getAttackTarget();              
    }
    

    register() {
        console.log(`You have register a ${this.type} ${this.name} with a magazine size of ${this.magSize} that does ${this.damage} damage for this simulation.`)
    }
    
    getFireWpn(){
        return this.damage * this.magSize;
    }
    
    getAttackTarget() {
        return this.hitPoints - this.totalDmg;
    }

    getDamageReport() {
        if(this.outcome >= this.hitPoints){
            return console.log(`The ${this.target} has been defeat by ${this.name} doing ${this.outcome} damage!`);
        }else{
            return console.log(`The ${this.target} is still standing with only ${this.hitPoints - this.totalDmg} HP left!`);
        }
    }

    async scoutArea() {
        console.log("Scanning the area ... ");
        await new Promise((resolve) => setTimeout(resolve, 2000));        
        await this.showTargetInfo();
    }

    fire() {
        this.getDamageReport()
    }
}

/*
    Sample code to test class objects
*/

//const citizen = new Guns('Mossberg', 'shotgun', 5, 50) 
