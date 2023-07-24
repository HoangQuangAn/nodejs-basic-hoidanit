
import express from 'express'
import configViewEngine from './configs/viewEngine.js'
const app = express()
const port = 9001


configViewEngine(app)
app.get('/', (req, res) => {
  res.render('test/index.ejs')
})

app.get('/about', (req, res) => {
  res.send('Toi la Hoang Quang An')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
