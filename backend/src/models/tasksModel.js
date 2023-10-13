const connection = require('./connection');

const getAll = async () => {
    const tasks = await (await connection).execute('SELECT * FROM tasks');
    return tasks[0];
};


const createTask = async (task) => {
    const { title, description } = task;
    const query = 'INSERT INTO tasks (title, description, completed) VALUES (?, ?, ?)';
    const [createdTask] = await (await connection).execute(query, [title, description, 0]);
    return { insertId: createdTask.insertId };
};

const deleteTask = async (id) => {
    const [removedTask] = await (await connection).execute('DELETE FROM tasks WHERE id = ?', [id]);
    return removedTask;
};

const updateTask = async (id, tasks) => {
    const { title, description, completed } = tasks;
    const query = 'UPDATE tasks SET title = ?, description = ?, completed = ?  WHERE id = ?';
    const [updatedTask] = await (await connection).execute(query, [title, description, completed, id]);
    return updatedTask;
};

module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask
};