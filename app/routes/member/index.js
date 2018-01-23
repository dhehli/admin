import express from 'express';
const router = express.Router();

const folder = './member/'

router.get('/', (req, res) => {
  res.render(`${folder}/index`);
})

router.get('/profile', (req, res) => {
  res.render('profile.ejs', {
    user: req.user // get the user out of session and pass to template
  });
});

export default router;
