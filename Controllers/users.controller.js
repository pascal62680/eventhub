import { getAllUsers } from '../Models/users.model.js';
import { getUserById } from '../Models/users.model.js';

import { updateUser } from '../Models/users.model.js';
import { deleteUser } from '../Models/users.model.js';


async function getAllUsersController(req, res) {
    try {
        const users = await getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Erreur serveur', error: error.message });
    }
}


async function getUserByIdController(req, res) {
    try {
        const id = req.params.id;
        const user = await getUserById(id);

        if (!user) {
            return res.status(404).json({ message: 'Utilisateur non trouvé' });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Erreur serveur', error: "utilisateur inconnu" });
    }
}

// 3. Modifier le profil d'un utilisateur
async function updateUserController(req, res) {
    try {
        const id = req.params.id;
        const username = req.body.username;
        const email = req.body.email;

        if (!username || !email) {
            return res.status(400).json({ message: 'Le nom d\'utilisateur et l\'email sont obligatoires' });
        }

        const result = await updateUser(id, username, email);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Utilisateur non trouvé' });
        }

        res.status(200).json({ message: 'Profil utilisateur mis à jour avec succès' });
    } catch (error) {
        res.status(500).json({ message: 'Erreur serveur', error: error.message });
    }
}

// 4. Supprimer un utilisateur
async function deleteUserController(req, res) {
    try {
        const id = req.params.id;
        const result = await deleteUser(id);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Utilisateur non trouvé' });
        }

        res.status(200).json({ message: 'Utilisateur supprimé avec succès' });
    } catch (error) {
        res.status(500).json({ message: 'Erreur serveur', error: error.message });
    }
}

export {
    getAllUsersController,
    getUserByIdController,
    updateUserController,
    deleteUserController
};