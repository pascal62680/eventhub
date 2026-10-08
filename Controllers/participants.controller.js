/* import TaskModel from '../Models/tasks.model.js'

async function getAll(req, res) {
    try {
        const tasks = await TaskModel.getAll();
        res.json(tasks);
    } catch (error) {
        console.error("Une erreur est survenue lors de la récupération des taches");
        res.status(500).json({ error: "Une erreur est survenue lors de la récupération des taches" })
    }
}

async function getById(req, res) {
    try {
        const id = req.params.id;
        const task = await TaskModel.getById(id);
        res.json(task[0]);
    } catch (error) {
        res.status(500).json({ error: "Une erreur est survenue lors de la récupération de la tache" })
    }
}

async function update(req, res) {
    try {
        const id = req.params.id;
        const body = req.body;
        // Vérifier que l'id recu corresponde a une tache en bdd
        let taskToUpdate = await TaskModel.getById(id);
        if (taskToUpdate.length === 0) {
            return res.status(404).json({ "error": "La tache que vous modifiez n'existe pas" })
        }
        // Je récupere le premiere element de mon tableau qui est un element en object json.
        taskToUpdate = taskToUpdate[0];
        // Modifier champs par champ avec des conditions 
        // Si je recois un nouveau titre alors je le modifie sinon rien
        if (body.title) {
            taskToUpdate.ta_title = body.title;
        }
        // Si je recois une nouvelle date de fin alors je le modifie sinon rien
        if (body.dueDate) {
            taskToUpdate.ta_dueDate = body.dueDate;
        }
        // Si je recois une description  alors je la modifie sinon rien
        if (body.description) {
            taskToUpdate.ta_description = body.description;
        }

        await TaskModel.update(id, taskToUpdate);
        res.json({ message: "Votre tache à bien été modifier", task: taskToUpdate });
    } catch (error) {
        res.status(500).json({ error: "Une erreur est survenue lors de la modification de la tache" });
    }
}

async function insert(req,res){
    try {
        const body = req.body;
        if (!body.title || !body.owner) {
            return res.status(403).json({error : "Le titre et le owner sont obligatoire !"})
        }

        const inserted = await TaskModel.insert(body);
        res.status(201).json(inserted);
    } catch (error) {
        res.status(500).json({error : "Erreur lors de l'insertion de la tache"});
    }
}


async function deleteTask(req,res) {
    try {
        const id = req.params.id;
        const deleted = await TaskModel.deleteTask(id);
        res.json(deleted);
    } catch (error) {
        res.status(500).json({error : "Une erreur est survenue lors de la suppression de la tache"})
    }
}

export default {
    getAll,
    getById,
    update,
    insert,
    deleteTask
} */