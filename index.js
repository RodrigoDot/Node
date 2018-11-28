var http = require('http')

var server = http.createServer( function(req, res) {

  var route = req.url

  console.log(req.url)

  if(route === '/tecnologia') {
    res.end('<html><body><h1>Tecnologia</h1></body></html>')
  }
  if(route === '/moda') {
    res.end('<html><body><h1>Moda</h1></body></html>')
  }
  if(route === '/ciencia') {
    res.end('<html><body><h1>Ciencia</h1></body></html>')
  } else {
    res.end('<html><body><h1>Hello World</h1></body></html>')
  }

})

server.listen(3000)
