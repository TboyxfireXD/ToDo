import React, { useState } from "react";
import "./Todo.css";

const Todo = () => {
  const [task, doTask] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const dop = {
      id: task.length === 0 ? 1 : task[task.length],
      taskName: newTask,
      completed: false,
    };
    doTask([...task, dop]);
  };

  const deleteLast = () => {
    doTask(task.slice(0, -1));
  };

  const deleteAll = () => {
    doTask([]);
  };

  const deleteTask = (id) => {
    doTask(task.filter((dop) => dop.id !== id));
  };

  const complete = (id) => {
    doTask(
      task.map((dop) => {
        if (dop.id === id) {
          return { ...dop, completed: true };
        } else {
          return dop;
        }
      })
    );
  };

  return (
    <div>
      <div className="Btn-ctrl">
        <h1>Todo-List App</h1>
        <input onChange={handleChange} value={newTask} />
        <button onClick={addTask}>Add a Task</button>
        <button onClick={deleteLast}>Delete the Last Task</button>
        <button onClick={deleteAll}>Delete All Tasks</button>
      </div>

      <div className="tasks">
        {task.map((dop) => (
          <div
            className="task"
            style={{ backgroundColor: dop.completed ? "green" : "white" }}
            key={dop.id}
          >
            <h3>{dop.taskName}</h3>
            <button onClick={() => deleteTask(dop.id)}>X</button>
            <button onClick={() => complete(dop.id)}>Complete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
