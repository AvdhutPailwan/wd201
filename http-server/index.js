// const http = require('http')
// const fs = require('fs')

// // Create an HTTP server
// const server = http.createServer((_req, res) => {
//   // Create a readable stream to read the contents of the file
//   const stream = fs.createReadStream('sample.txt')
//   // Pipe the contents of the file to the response stream
//   stream.pipe(res)

//   // Alternatively, you can use fs.readFile() to read the contents of the file
//   // and send it as the response using res.end()
//   // fs.readFile('sample.txt', (_err, data) => {
//   //   res.end(data)
//   // })
// })

// // Listen on port 3000
// server.listen(3000)

// ------------------------------------------------------------------------------------------------

// // Import the 'readline' module
// const readline = require('readline')

// // Create a readline interface for reading input from the console
// const lineDetail = readline.createInterface({
//   input: process.stdin, // Set the input stream to 'stdin' (standard input)
//   output: process.stdout // Set the output stream to 'stdout' (standard output)
// })

// // Ask the user for their name and wait for their input
// lineDetail.question('Please provide your name - ', (name) => {
//   // Once the user provides their name, print a greeting message with their name
//   console.log(`Hi ${name}!`)

//   // Close the readline interface to stop waiting for input
//   lineDetail.close()
// })

// const args = require('minimist')(process.argv.slice(2))

// console.log(args)

// const args = require('minimist')(process.argv.slice(2), {
//   alias: {
//     n: 'name',
//     a: 'age'
//   }
// })

// console.log(args)

// const args = require('minimist')(process.argv.slice(2), {
//   default: {
//     greeting: 'Hello'
//   }
// })
// console.log(args)
