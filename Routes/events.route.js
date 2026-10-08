import express from 'express';

import { getAllEventsController } from '../Controllers/events.controller.js';
import { getEventByIdController } from '../Controllers/events.controller.js';
import { createEventController } from '../Controllers/events.controller.js';
import { updateEventController } from '../Controllers/events.controller.js';
import { deleteEventController } from '../Controllers/events.controller.js';

import checkToken from '../Middleware/auth.middleware.js';

const router = express.Router();

router.get('/', getAllEventsController);

router.get('/:id', getEventByIdController);

router.post('/', checkToken, createEventController);

router.patch('/:id', checkToken, updateEventController);

router.delete('/:id', checkToken, deleteEventController);

export default router;