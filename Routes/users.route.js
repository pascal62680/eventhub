/* import express from 'express'
import UsersController from '../Controllers/users.controller.js'

const router = express.Router();

// /users/
router.get('/', UsersController.getAll)

// /users/:id
router.get('/:id', UsersController.getById)

router.patch('/:id', UsersController.update)

router.post("/", UsersController.insert)

router.delete("/:id", UsersController.deleteUser);

export default router; */