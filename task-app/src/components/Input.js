import {useState} from 'react'
import classes from './Input.module.css';

const InputItem = (props) => {
    const [edit, setEdit] = useState('');

    const [deleted, setDeleted] = useState('');

    const editHandler = () => {
        setEdit('Updated!')
        console.log('updated')
    }; 

    const deleteHandler = () => {
        setDeleted('Deleted!');
        console.log('deleted')
    };

    return (
            <div className={classes.form}>
                <div>{props.tasks.task}</div>
                <button onClick={editHandler}>{edit}</button> 
                <button onClick={deleteHandler}>{deleted}</button>    
            </div>
    )
}

export default InputItem;