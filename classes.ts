class Stark {
    name: string = "Brandon"
    static castle: string = 'Winterfell'
    saying: string   

    constructor () {
        this.saying = 'Winterfell!'
    }

    hello(person: string) {
        console.log('hello, ' + person)
    }
}

var ned: Stark = new Stark()
ned.saying = 'winter is coming'
ned.hello('Eduardo')