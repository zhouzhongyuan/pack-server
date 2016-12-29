import express from 'express';

const router = new express.Router();

router.get('/', (req, res) => {
    res.json({
        busy: false,
    });
});

module.exports = router;
