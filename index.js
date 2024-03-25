require('dotenv').config() // don't need a fallback with this in place.. || 5000

const server = require('./api/server.js') //pulling server from the api folder

const port = process.env.PORT 

server.listen(port, () => console.log(`\nAPI running on port ${port}\n`))