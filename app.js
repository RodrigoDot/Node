const express = require('express')
const app = express()

// Set default view engine
app.set('view engine', 'ejs')

// Set Routes
app.get('/', (req, res) => {
  res.render('home/home')
})
app.get('/noticias', (req, res) => {
  res.render('noticias/noticias')
})
app.get('/admin', (req, res) => {
  res.render('admin/admin')
})
app.get('*', (req, res) => {
  res.render('home/home')
})

// Init app
app.listen(3000, () => {
  console.log('Server running')
})
