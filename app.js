// const {sum, add} = require('./helpers')
// const total = sum(10, add(20, 30))
// console.log('Total: ', total)

// const http = require('http')
// const server = http.createServer((req, res) => res.end('hello world from node.js updated'))
// server.listen(3000)

// const express = require('express')
// const app = express()
// app.get('/', (req, res) => res.send('hello world from express'))
// app.listen(3000)

const fs = require('fs')
const fileName = 'target.txt'

const errHandler = err => console.error(err)
const dataHandler = data => console.log(data.toString())

fs.readFile(fileName, (err, data) => {
    if (err) errHandler(err)
    dataHandler(data)
})
console.log('async, non blocking. This code runs first')

// const data = fs.readFileSync(fileName)
// console.log(data.toString())
// console.log('sync, blocking. This code runs last')