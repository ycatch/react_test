import React from 'react';
import { Task } from './Task';

interface Props {
    tasks: Task[];
    toggleTaskDone: (selectedTask: Task) => void;
}

export const TaskList: React.FC<Props> = ({ tasks, toggleTaskDone }) => {
    return (
    <ul>
        {tasks.map(task => (
        <li key={task.id}>
            <label>
            <input type="checkbox" checked={task.done} onChange={() => toggleTaskDone(task)} />
            {task.title}
            </label>
        </li>
        ))}
    </ul>
    );
};