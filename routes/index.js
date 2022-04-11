const { Router } = require('express');
const controllers = require('../controllers');

const router = Router();

router.get('/', (req, res) => res.send('Welcome'))
router.post('/users', controllers.createUser);
router.put('/users/:userId', controllers.updateUser);

module.exports = router;