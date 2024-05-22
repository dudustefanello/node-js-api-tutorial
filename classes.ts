class Stark {
    name: string = "Brandon"
    static castle: string = 'Winterfell'
    saying: string   

    constructor () {
        this.saying = 'Winterfell!'
    }
}

var ned: Stark = new Stark()
ned.saying = 'winter is coming'