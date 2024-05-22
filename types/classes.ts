class Person {
    name: string
    
    constructor (name: string) {
        this.name = name
    }

    dance () {
        console.log(this.name + ' is dancing')
    }
}
var edu = new Person('Eduardo')
edu.dance()

class AwesomePerson extends Person {
    dance () {
        super.dance()
        console.log('SO AWESOME!')
    }    
}
var jose = new AwesomePerson('José')
jose.dance()
