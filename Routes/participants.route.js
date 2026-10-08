import express from 'express';

import { getAllParticipantsController } from '../Controllers/participants.controller.js';
import { getEventsByUserController } from '../Controllers/participants.controller.js';
import { getUsersByEventController } from '../Controllers/participants.controller.js';
import { addParticipantController } from '../Controllers/participants.controller.js';
import { removeParticipantController } from '../Controllers/participants.controller.js';

import checkToken from '../Middleware/auth.middleware.js';

const router = express.Router();

router.get('/', getAllParticipantsController);

router.get('/user/:userId', getEventsByUserController);

router.get('/event/:eventId', getUsersByEventController);

router.post('/', checkToken, addParticipantController);

router.delete('/:userId/:eventId', checkToken, removeParticipantController);

export default router;