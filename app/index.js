const router = require('express').Router();
const Controller = require('./Controller');

router.get('/', (req, res) => {
    res.json({
        message: 'Welcome to Igbo Names API, here you will find Igbo names with their pet name and meaning.',
        API_resources: [
            "/boys", "/boys/name", "/girls", "/girls/name", 
        ]
    })
})

// Boys route
router.get('/boys', Controller.getAllBoys);
router.get('/boys/:name', Controller.getBoyName);

// Girls Route
router.get('/girls', Controller.getAllGirls);
router.get('/girls/:name', Controller.getGirlName);
module.exports = router;