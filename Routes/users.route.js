import express from 'express';

import { getAllUsersController } from '../Controllers/users.controller.js';
import { getUserByIdController } from '../Controllers/users.controller.js';
import { updateUserController } from '../Controllers/users.controller.js';
import { deleteUserController } from '../Controllers/users.controller.js';

import checkToken from '../Middleware/auth.middleware.js';

const router = express.Router();

router.get('/', getAllUsersController);

router.get('/:id', getUserByIdController);

router.patch('/:id', checkToken, updateUserController);

router.delete('/:id', checkToken, deleteUserController);

export default router;