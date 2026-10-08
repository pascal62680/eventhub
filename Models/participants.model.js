/* import Db from '../Config/db.js'

async function getAll() {
    const [rows] = await Db.query("SELECT ta_id, ta_title, ta_description, ta_dueDate, ta_owner FROM tasks");
    return rows;
}

async function getById(id) {
    const [rows] = await Db.query(`SELECT ta_id, ta_title, ta_description, ta_dueDate, ta_owner, us_username, us_email
                                   FROM tasks
                                   INNER JOIN users ON us_id=ta_owner
                                   WHERE ta_id= ?`, [id])
    return rows;
}

async function update(id, task) {
    const status = await Db.query("UPDATE tasks SET ta_title = ?, ta_description = ?, ta_dueDate = ? WHERE ta_id = ?",
        [task.ta_title, task.ta_description, task.ta_dueDate, id])
    return status;
}


async function insert(task) {
    const inserted = await Db.query("INSERT INTO tasks (ta_title, ta_description, ta_dueDate, ta_owner) VALUES (?,?,?,?)",
        [task.title, task.description, task.dueDate, task.owner]);
    return inserted;
}

async function deleteTask(id) {
    const deleted = await Db.query("DELETE FROM tasks WHERE ta_id = ?", [id]);
    return deleted;
}

export default {
    getAll,
    getById,
    update,
    insert,
    deleteTask
} */