import express from 'express';

const router = new express.Router();

router.get('/', (req, res) => {
    res.json({
        pack: false,
        waiting: 8,
    });
});

module.exports = router;
