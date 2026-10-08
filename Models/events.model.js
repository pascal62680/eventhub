/* import Db from '../Config/db.js'

async function getAll() {
    const [rows] = await Db.query("SELECT col_user, col_task FROM collaborate;");
    return rows;
}

async function getByTaskId(taskId) {
    const [rows] = await Db.query("SELECT col_user, col_task FROM collaborate WHERE col_task = ?;", [taskId]);
    return rows;
}

async function getByUserId(userId) {
    const [rows] = await Db.query("SELECT col_user, col_task FROM collaborate WHERE col_user = ?;", [userId]);
    return rows;
}

// collaborate -> {user : 1, task:1 }
async function insert(collaborate) {
    const inserted = await Db.query("INSERT INTO collaborate(col_user, col_task) VALUES(?,?)", [collaborate.user, collaborate.task]);
    return inserted;
}

async function deleteCollaborate(task, user) {
    const deleted = await Db.query("DELETE FROM collaborate WHERE col_user = ? AND col_task= ?",[user,task]);
    return deleted;
}

export default{
    getAll,
    getByTaskId,
    getByUserId,
    insert,
    deleteCollaborate
} */