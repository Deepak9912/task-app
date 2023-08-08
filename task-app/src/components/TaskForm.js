import React from "react";
import { useState } from 'react';

const TaskForm = (props) => {

    const [enteredTask, setEnteredTask] = useState('')

    const addInputHandler = (event) => {
        setEnteredTask(event.target.value);
    };

    const buttonHandler = () => {
        props.onSaveTaskData(enteredTask);
        setEnteredTask('');
    }

    return <div>
        <div>
            <label>Add task: </label>
            <input type="text" value={enteredTask} onChange={addInputHandler} placeholder="add task"/>
            <button type="submit" onClick={buttonHandler}>Add task</button>
        </div>
    </div>
}

export default TaskForm;