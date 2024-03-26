const express = require('express')

const server = express()
//server instantiated by invoking express as a function 

server.use(express.json())
// teaching our server to parse json