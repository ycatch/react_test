import React, { useState } from 'react';
import { Task } from './components/Task';
import { TaskList } from './components//TaskList';
import { AddTask } from './components//AddTask';

import logo from './logo.svg';
import './App.css';

let id = 1;

function App() {
    const [tasks, setTasks] = useState<Task[]>([]);

    const addTask = (title: string) => {
      const newTask: Task = { id: id++, title, done: false };
      setTasks([...tasks, newTask]);
    };

    const toggleTaskDone = (selectedTask: Task) => {
      const newTasks = tasks.map(task =>
        task.id === selectedTask.id ? { ...task, done: !task.done } : task
      );
      setTasks(newTasks);
    };

    return (
      <div>
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Task Manager</h1>
            <AddTask addTask={addTask} />
            <TaskList tasks={tasks} toggleTaskDone={toggleTaskDone} />
        </header>
      </div>
    );
  }

export default App;
