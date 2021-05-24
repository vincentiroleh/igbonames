const router = require('express').Router();
const Controller = require('./Controller');

router.get('/', (req, res) => {
    res.json({
        message: 'Welcome to Igbo Names API, here you will find Igbo names with their pet name and meaning.',
        doc: 'https://github.com/vincentiroleh/igbonames',
    })
})

const apiV1 = '/api/v1';

// Boys route
router.get(`${apiV1}/boys`, Controller.getAllBoys);
router.get(`${apiV1}/boys/:name`, Controller.getBoyName);

// Girls Route
router.get(`${apiV1}/girls`, Controller.getAllGirls);
router.get(`${apiV1}/girls/:name`, Controller.getGirlName);

module.exports = router;