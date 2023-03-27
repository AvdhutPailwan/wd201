const http = require('http')
const fs = require('fs')

// Create an HTTP server
const server = http.createServer((_req, res) => {
  // Create a readable stream to read the contents of the file
  const stream = fs.createReadStream('sample.txt')
  // Pipe the contents of the file to the response stream
  stream.pipe(res)

  // Alternatively, you can use fs.readFile() to read the contents of the file
  // and send it as the response using res.end()
  // fs.readFile('sample.txt', (_err, data) => {
  //   res.end(data)
  // })
})

// Listen on port 3000
server.listen(3000)
