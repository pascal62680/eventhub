import { getUserByEmail } from '../Models/users.model.js';
import { insertUser } from '../Models/users.model.js';

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import dotenv from 'dotenv';
dotenv.config();

// 1. Inscription
async function register(req, res) {
    try {
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;

        if (!username || !email || !password) {
            return res.status(400).json({ error: 'Tous les champs (username, email, password) sont requis' });
        }

        // Vérification si l'utilisateur existe déjà
        const existingUser = await getUserByEmail(email);
        if (existingUser) {
            return res.status(400).json({ error: 'Cet email est déjà utilisé' });
        }

        // Hachage asynchrone du mot de passe
        const hashedPassword = await bcrypt.hash(password, 10);

        // Appel à ta fonction du Model avec ses 3 arguments
        const inserted = await insertUser(username, hashedPassword, email);

        res.status(201).json({ message: 'Utilisateur créé avec succès', id: inserted.insertId });
    } catch (error) {
        res.status(500).json({ error: 'Une erreur est survenue lors de l\'inscription', message: error.message });
    }
}

// 2. Connexion
async function login(req, res) {
    try {
        const email = req.body.email;
        const password = req.body.password;

        // Vérification des champs reçus
        if (!email || !password) {
            return res.status(401).json({ error: 'Identifiant ou mot de passe incorrect' });
        }

        // Récupération de l'utilisateur par son email
        const user = await getUserByEmail(email);
        if (!user) {
            return res.status(401).json({ error: 'Identifiant ou mot de passe incorrect' });
        }

        // Comparaison asynchrone du mot de passe avec 'us_password'
        const compare = await bcrypt.compare(password, user.us_password);
        if (!compare) {
            return res.status(401).json({ error: 'Identifiant ou mot de passe incorrect' });
        }

        // Création du Token JWT
        const token = jwt.sign(
            { id: user.us_id, email: user.us_email },
            process.env.JWT_SECRET || 'votre_cle_secrete',
            { expiresIn: '1h' }
        );

        res.status(200).json({ token: token });
    } catch (error) {
        res.status(500).json({ error: 'Une erreur est survenue lors de la connexion', message: error.message });
    }
}

export {
    register,
    login
};