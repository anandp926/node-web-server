const express = require('express')

// create app

var app = express()

app.get('/', (req, res) => {
    res.send('Heloo anand')
})

app.listen(3000)