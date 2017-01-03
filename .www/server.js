const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const path = require('path')
// const apiRouter = require('../routes/apiIndex.js');
const db = require('../models')

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json())
app.use(express.static('public'))

// app.use('/api', apiRouter)

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../views/index.html'))
})

db.sequelizeConnection.sync().then(function() {
	console.log("Everything's working! Yay! Listening on port 5000");
  app.listen(5000)
})
