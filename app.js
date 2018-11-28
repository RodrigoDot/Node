const express = require('express')
const app = express()

// Set default view engine
app.set('view engine', 'ejs')

// Set Routes
app.get('/', (req, res) => {
  res.render('home')
})
app.get('/tecnologia', (req, res) => {
  res.render('tecnologia')
})
app.get('/moda', (req, res) => {
  res.render('moda')
})
app.get('*', (req, res) => {
  res.render('home')
})

// Init app
app.listen(3000, () => {
  console.log('Server running')
})
