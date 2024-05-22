// const {sum, add} = require('./helpers')

// const total = sum(10, add(20, 30))

// console.log('Total: ', total)


const http = require('http')

const server = http.createServer((req, res) => res.end('hello world from node.js'))

server.listen(3000)