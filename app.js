// const {sum, add} = require('./helpers')
// const total = sum(10, add(20, 30))
// console.log('Total: ', total)

// const http = require('http')
// const server = http.createServer((req, res) => res.end('hello world from node.js updated'))
// server.listen(3000)

const express = require('express')
const app = express()
app.get('/', (req, res) => res.send('hello world from express'))
app.listen(3000)