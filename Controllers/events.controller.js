import { getAllEvents } from '../Models/events.model.js';
import { getEventById } from '../Models/events.model.js';
import { insertEvent } from '../Models/events.model.js';
import { updateEvent } from '../Models/events.model.js';
import { deleteEvent } from '../Models/events.model.js';

// 1. Récupérer tous les événements
async function getAllEventsController(req, res) {
    try {
        const events = await getAllEvents();
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ message: 'Erreur serveur', error: error.message });
    }
}

// 2. Récupérer un événement par son ID
async function getEventByIdController(req, res) {
    try {
        const id = req.params.id;
        const event = await getEventById(id);

        if (!event) {
            return res.status(404).json({ message: 'Événement non trouvé' });
        }

        res.status(200).json(event);
    } catch (error) {
        res.status(500).json({ message: 'Erreur serveur', error: error.message });
    }
}

// 3. Créer un événement
async function createEventController(req, res) {
    try {
        const title = req.body.title;
        const description = req.body.description;
        const date = req.body.date;
        const location = req.body.location;
        const owner = req.body.owner;

        if (!title || !date || !owner) {
            return res.status(400).json({ message: 'Le titre, la date et le propriétaire sont obligatoires' });
        }

        const result = await insertEvent(title, description, date, location, owner);
        res.status(201).json({ message: 'Événement créé avec succès', id: result.insertId });
    } catch (error) {
        res.status(500).json({ message: 'Erreur serveur', error: error.message });
    }
}

// 4. Modifier un événement
async function updateEventController(req, res) {
    try {
        const id = req.params.id;
        const title = req.body.title;
        const description = req.body.description;
        const date = req.body.date;
        const location = req.body.location;

        if (!title || !date) {
            return res.status(400).json({ message: 'Le titre et la date sont requis pour la mise à jour' });
        }

        const result = await updateEvent(id, title, description, date, location);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Événement non trouvé' });
        }

        res.status(200).json({ message: 'Événement mis à jour avec succès' });
    } catch (error) {
        res.status(500).json({ message: 'Erreur serveur', error: error.message });
    }
}

// 5. Supprimer un événement
async function deleteEventController(req, res) {
    try {
        const id = req.params.id;
        const result = await deleteEvent(id);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Événement non trouvé' });
        }

        res.status(200).json({ message: 'Événement supprimé avec succès' });
    } catch (error) {
        res.status(500).json({ message: 'Erreur serveur', error: error.message });
    }
}

export {
    getAllEventsController,
    getEventByIdController,
    createEventController,
    updateEventController,
    deleteEventController
};