const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('profile router is working...'));

module.exports = router;