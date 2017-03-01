var express = require('express')
var app = express()
var PORT = 3000

var middleware = {
  requireAuthentication: function(req, res, next) {
    console.log('private route hit!')
    next();
  }
}

app.get('/about', function(req, res){
  res.send('About Us')
})

app.use(express.static(__dirname + "/public"))

app.listen(PORT, function(){
  console.log('express server started on port ' + PORT)
})