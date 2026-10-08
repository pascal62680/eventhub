import express from 'express';

import { getAllCommentsController } from '../Controllers/comments.controller.js';
import { getCommentByIdController } from '../Controllers/comments.controller.js';
import { createCommentController } from '../Controllers/comments.controller.js';
import { updateCommentController } from '../Controllers/comments.controller.js';
import { deleteCommentController } from '../Controllers/comments.controller.js';

import checkToken from '../Middleware/auth.middleware.js';

const router = express.Router();

router.get('/', getAllCommentsController);

router.get('/:id', getCommentByIdController);

router.post('/', checkToken, createCommentController);

router.patch('/:id', checkToken, updateCommentController);

router.delete('/:id', checkToken, deleteCommentController);

export default router;


/* import express from "express"
import commentsController from '../Controllers/comments.controller.js'

const router = express.Router();

router.get("/", commentsController.getAll)

router.get("/:id", commentsController.getById)

router.patch("/:id", commentsController.update)

router.post("/", commentsController.insert)

router.delete("/:id", commentsController.deleteComments)


export default router; */