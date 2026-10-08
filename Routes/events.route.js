/* import express from 'express'
import TaskController from '../Controllers/tasks.controller.js';
const router = express.Router();

// GET /tasks -> Je récupère toutes les taches
router.get('/', TaskController.getAll)

// GET /tasks/:id -> Je récupère une tache via son ID
router.get('/:id', TaskController.getById);

// PATCH /tasks/:id -> Je modifie une tache avec son Id en parametre
router.patch('/:id', TaskController.update);

// DELETE /tasks/:id -> Je supprime une tache via son Id
router.delete('/:id', TaskController.deleteTask);

// POST /tasks -> J'ajoute une tache
router.post('/', TaskController.insert);

// On exporte le router pour pouvoir l'utiliser dans le fichier index.js
export default router; */