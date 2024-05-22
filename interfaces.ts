interface Stark {
    name: string
    age?: number
}
// ? means optional

function printName(stark: Stark) {
    console.log(stark.name)
}

printName({name: 'Eduardo'})
// printName({label: 'Nice'}) // Typescript error