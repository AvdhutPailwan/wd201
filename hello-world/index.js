// This code is Importing the Node.js File System module
const fs = require('fs')

// This code uses `fs.writeFile()` to write given data to a new file called 'sample.txt'
fs.writeFile(
  // first argument is the name of file to be created or updated
  'sample.txt',

  // second argument is the data to be written inside the file
  'Hello World. Welcome to Node.js File System module.',

  // Error handling with a callback function that will be called once the write operation is complete.
  (err) => {
    if (err) throw err // If an error occurs during the write operation, the code throws the error using `throw err`

    console.log('File created!') // If the write operation is successful, log a message indicating that the file was created.
  }
)

// This code uses the Node.js File System module to read the contents of a file named 'sample.txt'
fs.readFile('sample.txt', (err, data) => {
  // Error handling: if an error occurs during the read operation, the code throws the error using `throw err`
  if (err) throw err

  // Log the contents of the file to the console using `console.log(data.toString())`.
  // The `toString()` method is used to convert the data buffer to a string so that it can be logged to the console.
  console.log(data.toString())
})

// This code updates an existing file called 'sample.txt' with new content
// first argument is the name of file to update
// second argument is the data to be appended to the file
// third argument is the callback function
fs.appendFile('sample.txt', ' This is my updated content', (err) => {
  // Error handling: If there is any error during the writing operation, the code throws the error using `throw err`
  if (err) throw err

  // If the writing is successful, it logs "File updated!" to the console.
  console.log('File updated!')
})

// This code renames the 'sample.txt' file to 'test.txt'
fs.rename('sample.txt', 'test.txt', (err) => {
  // Error handling: If there is any error during the operation, the code throws the error using `throw err`
  if (err) throw err

  // If renaming is successful, log "File name updated!" to the console.
  console.log('File name updated!')
})

// This code deletes a file called 'test.txt'
// The fs.unlink() method is used to delete the file
fs.unlink('test.txt', (err) => { // Pass the file name as the first argument and a callback function that will be executed once the file is deleted or an error occurs
  if (err) throw err // If an error occurs, throw an error
  console.log('File test.txt deleted successfully!') // If the file is deleted successfully, print this message to the console
})
