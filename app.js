const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<html><body><h1>Hello World</h1></body></html>')
})
app.get('/tecnologia', (req, res) => {
  res.send('<html><body><h1>Tecnologia</h1></body></html>')
})
app.get('/moda', (req, res) => {
  res.send('<html><body><h1>Moda</h1></body></html>')
})
app.get('*', (req, res) => {
  res.send('<html><body><h1>Hello World</h1></body></html>')
})

app.listen(3000, () => {
  console.log('Server running')
})
