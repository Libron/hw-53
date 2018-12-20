import React from 'react';
import './TaskForm.css';

const TaskForm = props => (
    <form className="TaskForm">
        <label htmlFor="title">
            <input type="text" placeholder="Buy milk ..." name="title" />
        </label>
        <button type="submit" onSubmit={props.addTask} className="btn-add">Add Task</button>
    </form>
);

export default TaskForm;