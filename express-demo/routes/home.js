const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'My express App', message: 'Hello wachin!' })
});

module.exports = router;