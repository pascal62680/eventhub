import { getAllParticipant } from '../Models/participants.model.js';
import { getEventsByUser } from '../Models/participants.model.js';
import { getUsersByEvent } from '../Models/participants.model.js';
import { insertParticipant } from '../Models/participants.model.js';
import { deleteParticipant } from '../Models/participants.model.js';


async function getAllParticipantsController(req, res) {
    try {
        const participant = await getAllParticipant();
        res.status(200).json(participant);
    } catch (error) {
        res.status(500).json({ message: 'Erreur serveur', error: error.message });
    }
}

// 2. Récupérer les événements d'un utilisateur
async function getEventsByUserController(req, res) {
    try {
        const { userId } = req.params;
        const events = await getEventsByUser(userId);
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ message: 'Erreur serveur', error: error.message });
    }
}

// 3. Récupérer  les participants d'un événement
async function getUsersByEventController(req, res) {
    try {
        const { eventId } = req.params;
        const users = await getUsersByEvent(eventId);
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Erreur serveur', error: error.message });
    }
}

// 4. Inscrire un utilisateur à un événement
async function addParticipantController(req, res) {
    try {
        const { userId, eventId } = req.body;

        if (!userId || !eventId) {
            return res.status(400).json({ message: 'L\'ID utilisateur et l\'ID événement sont requis' });
        }

        await insertParticipant(userId, eventId);
        res.status(201).json({ message: 'Inscription enregistrée avec succès' });
    } catch (error) {
        res.status(500).json({ message: 'Erreur serveur', error: error.message });
    }
}

// 5. Désinscrire un utilisateur d'un événement
async function removeParticipantController(req, res) {
    try {
        const { userId, eventId } = req.params;
        const result = await deleteParticipant(userId, eventId);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Inscription non trouvée' });
        }

        res.status(200).json({ message: 'Désinscription effectuée avec succès' });
    } catch (error) {
        res.status(500).json({ message: 'Erreur serveur', error: error.message });
    }
}

export {
    getAllParticipantsController,
    getEventsByUserController,
    getUsersByEventController,
    addParticipantController,
    removeParticipantController
};