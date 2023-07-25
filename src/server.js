import express from 'express'
import configViewEngine from './configs/viewEngine.js'
import 'dotenv/config'
import path from 'path'
import { fileURLToPath } from 'url';
import initRouter from './route/web.js'
const app = express()
const port = process.env.PORT;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, 'public')));

//setup view engine
configViewEngine(app)

//init web route
initRouter(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
