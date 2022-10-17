const express = require('express')
const os = require('os')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  console.log('Hello World!')
  res.json({
    'message' : 'Node app',
    'host' : os.hostname()
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})