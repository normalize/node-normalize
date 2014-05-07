var http = require('http')
var fs = require('fs')
http.createServer(function(req, res) {
  fs.createReadStream('./test1.js').pipe(res)
}).listen(8080, function() {
  console.log('server started on 8080')
})

