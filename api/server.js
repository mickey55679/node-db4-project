const express = require('express')
//bringing in express

const recipesRouter = require('./recipes/recipes-router')
//bringing in recipesRouter

const server = express()
//server instantiated by invoking express as a function 

server.use(express.json())
// teaching our server to parse json

server.use('/api/recipes', recipesRouter)
// the recipes router

module.exports = server 
//exposing it 