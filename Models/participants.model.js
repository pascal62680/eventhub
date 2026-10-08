import db from '../Config/db.js';


async function getAllParticipant() {
    const [rows] = await db.query(
        'SELECT pa_user, pa_event FROM participants'
    );
    return rows;
}

// événements auxquels participe un utilisateur
async function getEventsByUser(userId) {
    const [rows] = await db.query(
        `SELECT 
            p.pa_event, 
            e.ev_title, 
            e.ev_description, 
            e.ev_date, 
            e.ev_location 
        FROM participants p
        JOIN events e ON p.pa_event = e.ev_id
        WHERE p.pa_user = ?`,
        [userId]
    );
    return rows;
}

// utilisateurs inscrits à un événement
async function getUsersByEvent(eventId) {
    const [rows] = await db.query(
        `SELECT 
            p.pa_user, 
            u.us_username, 
            u.us_email 
        FROM participants p
        JOIN users u ON p.pa_user = u.us_id
        WHERE p.pa_event = ?`,
        [eventId]
    );
    return rows;
}

// Inscrire un utilisateur à un événement
async function insertParticipant(userId, eventId) {
    const [result] = await db.query(
        'INSERT INTO participants (pa_user, pa_event) VALUES (?, ?)',
        [userId, eventId]
    );
    return result;
}

// Désinscrire un utilisateur d'un événement
async function deleteParticipant(userId, eventId) {
    const [result] = await db.query(
        'DELETE FROM participants WHERE pa_user = ? AND pa_event = ?',
        [userId, eventId]
    );
    return result;
}

// Exportation globale en fin de fichier
export {
    getAllParticipant,
    getEventsByUser,
    getUsersByEvent,
    insertParticipant,
    deleteParticipant
};