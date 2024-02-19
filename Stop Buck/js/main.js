
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
}