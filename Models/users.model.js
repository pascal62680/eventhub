import db from '../Config/db.js';

// Récupérer tous les utilisateurs
async function getAllUsers() {
    const [rows] = await db.query(
        'SELECT us_id, us_username, us_email FROM users'
    );
    return rows;
}

// Récupérer un utilisateur par son ID
async function getUserById(id) {
    const [rows] = await db.query(
        'SELECT us_id, us_username, us_email FROM users WHERE us_id = ?',
        [id]
    );
    return rows[0];
}

// Récupérer un utilisateur par son email
async function getUserByEmail(email) {
    const [rows] = await db.query(
        'SELECT us_id, us_username, us_password, us_email FROM users WHERE us_email = ?',
        [email]
    );
    return rows[0];
}

// Créer un utilisateur (inscription)
async function insertUser(username, hashedPassword, email) {
    const [result] = await db.query(
        'INSERT INTO users (us_username, us_password, us_email) VALUES (?, ?, ?)',
        [username, hashedPassword, email]
    );
    return result;
}

// Modifier le profil d'un utilisateur
async function updateUser(id, username, email) {
    const [result] = await db.query(
        'UPDATE users SET us_username = ?, us_email = ? WHERE us_id = ?',
        [username, email, id]
    );
    return result;
}

// Supprimer un utilisateur
async function deleteUser(id) {
    const [result] = await db.query(
        'DELETE FROM users WHERE us_id = ?',
        [id]
    );
    return result;
}

// Exportation globale en fin de fichier
export {
    getAllUsers,
    getUserById,
    getUserByEmail,
    insertUser,
    updateUser,
    deleteUser
};