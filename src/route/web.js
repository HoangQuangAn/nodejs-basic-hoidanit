import express from 'express'
import homeController from '../controllers/homeController.js';
let router=express.Router();

const initRouter=(app)=>{
  router.get('/', homeController.getHomepage)

  router.get('/about', (req, res) => {
    res.send('Toi la Hoang Quang An')
  })
  return app.use('/', router)
}
export default initRouter;
