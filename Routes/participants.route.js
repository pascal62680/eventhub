/* import express from "express"
import collaborateController from '../Controllers/collaborate.controller.js'

const router = express.Router();

router.get("/", collaborateController.getAll)

// getByuserId -> Pour récuperer toutes les tache ou mon user collabore
router.get('/user/:userID', collaborateController.getByUserId);

// getByTaskId -> Pour récuperer tous les users qui collabore sur une taches
router.get('/task/:taskID', collaborateController.getByTaskId);

router.post("/", collaborateController.insert)

router.delete("/:userID/:taskID", collaborateController.deleteCollaborate)

export default router; */