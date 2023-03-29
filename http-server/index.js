// Require the 'http' and 'fs' modules
const http = require('http')
const fs = require('fs')

// Require the 'minimist' module and parse command-line arguments
const args = require('minimist')(process.argv.slice(1), {
  // Define an alias for the 'port' argument
  alias: {
    p: 'port'
  },
  // Set the default value for the 'port' argument
  default: {
    port: 3000
  }
})

// Define variables to hold the content of each HTML page
let homeContent = ''
let projectContent = ''
let registerPage = ''

// Read the contents of each HTML page into its respective variable
fs.readFile('home.html', (err, home) => {
  if (err) throw err
  homeContent = home
})

fs.readFile('project.html', (err, project) => {
  if (err) throw err
  projectContent = project
})

fs.readFile('registration.html', (err, register) => {
  if (err) throw err
  registerPage = register
})

// Create an HTTP server that listens for requests on the specified port
http.createServer((request, response) => {
  // Get the requested URL
  const url = request.url

  // Set the response header to indicate that the response contains HTML
  response.writeHeader(200, { 'Content-Type': 'text/html' })

  // Use a switch statement to handle different URLs
  switch (url) {
    case '/project':
      // If the URL is '/project', send the project content
      response.write(projectContent)
      response.end()
      break
    case '/registration':
      // If the URL is '/registration', send the registration page content
      response.write(registerPage)
      response.end()
      break
    default:
      // For any other URL, send the home page content
      response.write(homeContent)
      response.end()
      break
  }
}).listen(args.port)
