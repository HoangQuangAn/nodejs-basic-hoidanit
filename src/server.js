import express from 'express'
import configViewEngine from './configs/viewEngine.js'
import 'dotenv/config'
import path from 'path'
import { fileURLToPath } from 'url';
import initRouter from './route/web.js'
import bodyParser from 'body-parser';
const app = express()
const port = process.env.PORT;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, 'public')));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//setup view engine
configViewEngine(app)

//init web route
initRouter(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
