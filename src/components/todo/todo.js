import React, {useState} from 'react';

function ToDo (){
    const [tasks, setTasks] = useState([]); // State to hold tasks
    const [newTask, setNewTask] = useState(''); // State for new task input

    const addTask =(e) =>{
        e.preventDefault(); // Prevent form submission
        if (newTask.trim() === '') return; 
        const task = {
            id: Date.now(),
            text: newTask,
            completed: false,
        };// Ignore empty tasks
        setTasks([...tasks, task]); // Add new task to the list
        setNewTask(''); // Clear input field
    };
    const deleteTask = (id) => {
        const updatedTasks = [];
        for (let i = 0; i < tasks.length; i++) {
          if (tasks[i].id !== id) {
            updatedTasks.push(tasks[i]);
          }
        }
        setTasks(updatedTasks);
      };


      const toggleComplete = (id) => {
        const updatedTasks = [];
        for (let i = 0; i < tasks.length; i++) {
          if (tasks[i].id === id) {
            updatedTasks.push({ ...tasks[i], completed: !tasks[i].completed });
          } else {
            updatedTasks.push(tasks[i]);
          }
        }
        setTasks(updatedTasks);
      };

const taskElements = [];

for (let i = 0; i < tasks.length; i++) {
  const task = tasks[i];

  taskElements.push(
    <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
      <span
        style={{
          textDecoration: task.completed ? 'line-through' : 'none',
          color: task.completed ? 'gray' : 'black',
          cursor: 'pointer'
        }}
        onClick={() => toggleComplete(task.id)}
      >
        {task.completed && '✔️ '} {task.text}
      </span>
      <button
        onClick={() => deleteTask(task.id)}
        className="btn btn-sm btn-danger"
      >
        Delete
      </button>
    </li>
  );
}

    return (
        <div className="todo">
            
            <h1>To-Do List</h1>
            <p>Manage your tasks efficiently!</p>

            <form onSubmit={addTask} className="mb-3">
                <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Enter a new task"
                className="form-control"
                />
                <button type="submit" className="btn btn-primary mt-2">Add Task</button>
            </form>
            <ul className="list-group">
                {taskElements.length > 0 ? taskElements : (
                <p>No tasks yet. Add one above!</p>
                )}
            </ul>
            
    
        </div>
    );

}
export default ToDo;