import React from 'react';
import { Task } from './Task';

interface Props {
    tasks: Task[];
    toggleTaskDone: (selectedTask: Task) => void;
    deleteTask: (selectedTask: Task) => void;
    editTask: (selectedTask: Task, newTitle: string) => void;
}

export const TaskList: React.FC<Props> = ({ tasks, toggleTaskDone, deleteTask, editTask }) => {
    return (
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <label>
              <input type="checkbox" checked={task.done} onChange={() => toggleTaskDone(task)} />
              {task.title}
            </label>
            <button onClick={() => deleteTask(task)}>Delete</button>
            <button onClick={() => {
              const newTitle = prompt('New title:', task.title);
              if (newTitle) {
                editTask(task, newTitle);
              }
            }}>Edit</button>
          </li>
        ))}
      </ul>
    );
  };