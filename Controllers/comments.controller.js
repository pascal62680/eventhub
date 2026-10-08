import { getAllComments } from '../Models/comments.model.js';
import { getCommentById } from '../Models/comments.model.js';
import { insertComment } from '../Models/comments.model.js';
import { updateComment } from '../Models/comments.model.js';
import { deleteComment } from '../Models/comments.model.js';


async function getAllCommentsController(req, res) {
    try {
        const comments = await getAllComments();
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ message: 'Erreur serveur', error: error.message });
    }
}


async function getCommentByIdController(req, res) {
    try {
        const id = req.params.id;
        const comment = await getCommentById(id);

        if (!comment) {
            return res.status(404).json({ message: 'Commentaire non trouvé' });
        }

        res.status(200).json(comment);
    } catch (error) {
        res.status(500).json({ message: 'Erreur serveur', error: error.message });
    }
}

// 3. Créer un commentaire
async function createCommentController(req, res) {
    try {
        const content = req.body.content;
        const user = req.body.user;
        const event = req.body.event;

        if (!content || !user || !event) {
            return res.status(400).json({ message: 'Le contenu, l\'auteur et l\'événement sont obligatoires' });
        }

        const result = await insertComment(content, user, event);
        res.status(201).json({ message: 'Commentaire créé avec succès', id: result.insertId });
    } catch (error) {
        res.status(500).json({ message: 'Erreur serveur', error: error.message });
    }
}

// 4. Modifier un commentaire
async function updateCommentController(req, res) {
    try {
        const id = req.params.id;
        const content = req.body.content;

        if (!content) {
            return res.status(400).json({ message: 'Le texte du commentaire est requis' });
        }

        const result = await updateComment(id, content);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Commentaire non trouvé' });
        }

        res.status(200).json({ message: 'Commentaire mis à jour avec succès' });
    } catch (error) {
        res.status(500).json({ message: 'Erreur serveur', error: error.message });
    }
}

// 5. Supprimer un commentaire
async function deleteCommentController(req, res) {
    try {
        const id = req.params.id;
        const result = await deleteComment(id);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Commentaire non trouvé' });
        }

        res.status(200).json({ message: 'Commentaire supprimé avec succès' });
    } catch (error) {
        res.status(500).json({ message: 'Erreur serveur', error: error.message });
    }
}

export {
    getAllCommentsController,
    getCommentByIdController,
    createCommentController,
    updateCommentController,
    deleteCommentController
};