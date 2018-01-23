import express from 'express';
const router = express.Router();

const folder = './member/'

router.get('/member', function(req, res) {
  res.render(`${folder}/index`);
})

export default router;
