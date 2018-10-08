const express = require('express')
const hbs = require('hbs')

// create app

var app = express();

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/public'))

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear()
})

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase()
})

app.get('/', (req, res) => {
    // res.send('Heloo anand')
    res.render('home.hbs', {
        pageTitle: 'Home Page',
        welcomeMessage: 'Welcome to my website'
    })
})

app.get('/about', (req, res) => {
    res.render('about.hbs',{
        pageTitle: 'About Page',
    })
})

app.get('/bad', (req, res) => {
    res.send({
        error:'Not found'
    })
})

app.listen(3000, () => {
    console.log('server is running on port 3000')
})