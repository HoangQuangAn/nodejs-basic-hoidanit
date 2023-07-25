import express from 'express'
import configViewEngine from './configs/viewEngine.js'
import 'dotenv/config'
import path from 'path'
import { fileURLToPath } from 'url';
const app = express()
const port = process.env.PORT;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, 'public')));
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
