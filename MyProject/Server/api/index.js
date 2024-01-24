const express = require('express');
const router = express.Router();

router.get('/health', (req, res, next) => {
    res.send('OK');
});

router.use('/characters', require('./characters'));

router.use('/places', require('./places'));

router.use('/monsters', require('./monsters'));

router.use('/comments', require('./comments'));

module.exports = router;