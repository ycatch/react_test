import React, { useState } from 'react';

interface Props {
    addTask: (title: string) => void;
}

export const AddTask: React.FC<Props> = ({ addTask }) => {
    const [title, setTitle] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTask(title);
    setTitle('');
    };

    return (
    <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
        <button type="submit">Add</button>
    </form>
    );
};