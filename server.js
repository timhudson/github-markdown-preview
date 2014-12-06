var http = require('http')
var sse = require('sse-stream')('/updates')

var ecstatic = require('ecstatic')(__dirname)

var server = module.exports = http.createServer(ecstatic)

var clients = []
var html

sse.install(server)

sse.on('connection', function(client) {
  clients.push(client)
  client.write(html)

  client.on('end', function() {
    clients.splice(clients.indexOf(client), 1)
  })
})

module.exports.update = function(newHtml) {
  html = newHtml
  clients.forEach(function(client) {
    client.write(newHtml)
  })
}
