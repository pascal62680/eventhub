import db from '../Config/db.js'

async function getAllEvents() {
    const [rows] = await db.query(
        'SELECT ev_id, ev_title, ev_description, ev_date, ev_location, ev_owner FROM events'
    );
    return rows;
}

// rassembler les infomations utilisateurs  et evenements
async function getEventById(id) {
    const [rows] = await db.query(
        `SELECT 
            e.ev_id, 
            e.ev_title, 
            e.ev_description, 
            e.ev_date, 
            e.ev_location, 
            e.ev_owner,
            u.us_username,
            u.us_email
        FROM events e
        JOIN users u ON e.ev_owner = u.us_id
        WHERE e.ev_id = ?`,
        [id]
    );
    return rows[0];
}

// Créer un événement
async function insertEvent(title, description, date, location, owner) {
    const [result] = await db.query(
        'INSERT INTO events (ev_title, ev_description, ev_date, ev_location, ev_owner) VALUES (?, ?, ?, ?, ?)',
        [title, description, date, location, owner]
    );
    return result;
}

// Modifier un événement 
async function updateEvent(id, title, description, date, location) {
    const [result] = await db.query(
        `UPDATE events 
         SET ev_title = ?, ev_description = ?, ev_date = ?, ev_location = ? 
         WHERE ev_id = ?`,
        [title, description, date, location, id]
    );
    return result;
}
async function deleteEvent(id) {
    const [result] = await db.query(
        'DELETE FROM events WHERE ev_id = ?',
        [id]
    );
    return result;
}

export {
    getAllEvents,
    getEventById,
    insertEvent,
    updateEvent,
    deleteEvent
};
