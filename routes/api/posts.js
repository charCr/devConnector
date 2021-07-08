const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('posts API is working...'));

module.exports = router;