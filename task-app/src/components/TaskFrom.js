import React from "react";
import {useState}  from 'react';
import classes from './Input.module.css';

const TaskForm = () => {

    const [enteredTask, setEnteredTask] = useState('')

    const addInputHandler = (event) => {
        setEnteredTask(event.target.value);
        console.log(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const taskData = {
            task: enteredTask
        }
        console.log(taskData);
        setEnteredTask('');
    }

    return <form className={classes.form} onSubmit={submitHandler}>
        <div>
            <label>Add task</label>
            <input type="text" value={enteredTask} onChange={addInputHandler} />
        </div>
        <div>
            <button type="submit">Add task</button>
        </div>
    </form>
}

export default TaskForm;