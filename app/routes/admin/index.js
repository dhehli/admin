import express from 'express';
const router = express.Router();

const folder = './admin/'

router.get('/', function(req, res) {
  res.render(`${folder}/index`);
})

export default router;
