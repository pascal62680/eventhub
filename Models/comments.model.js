import Db from '../Config/db.js'

// tout recuperer
async function getall() {
    const [row] = await Db.query ('SELECT co_id, co_comments, co_user, co_event FROM comments'
};
return rows;

// retrouver un commentaire
async function getCommentById(id) {
    const [rows] = await db.query(
        'SELECT co_id, co_comments, co_user, co_event FROM comments WHERE co_id = ?',
        [id]
    );
    return rows[0];
}
// Insérer un commentaire
async function insertComment(comment, user, event) {
    const [result] = await db.query(
        'INSERT INTO comments (co_comments, co_user, co_event) VALUES (?, ?, ?)',
        [comment, user, event]
    );
    return result;
}

// Modifier 
async function updateComment(id, comment) {
    const [result] = await db.query(
        'UPDATE comments SET co_comments = ? WHERE co_id = ?',
        [comment, id]
    );
    return result;
}

// Supprimer 
async function deleteComment(id) {
    const [result] = await db.query(
        'DELETE FROM comments WHERE co_id = ?',
        [id]
    );
    return result;
}


export {
    getAll,
    getCommentById,
    insertComment,
    updateComment,
    deleteComment
};


