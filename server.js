const express = require('express')
const app = express()
const port = 9001

app.get('/', (req, res) => {
  res.send('Hello World! voi Hoi dan it')
})

app.get('/about', (req, res) => {
  res.send('Toi la Hoang Quang An')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
