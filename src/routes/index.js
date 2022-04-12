import express from 'express';
import controllers from '../controllers';

const router = express.Router();

router.get('/', (req, res) => res.send('Welcome'));
router.post('/users', controllers.createUser);
router.put('/users/:userId', controllers.updateUser);
router.delete('/users/:userId', controllers.deleteUser);

export default router;
