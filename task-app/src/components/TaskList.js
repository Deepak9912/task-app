import classes from './Input.module.css';

const TaskList = (props) => {

    return (
            <div className={classes.form}>
                {props.item}  
            </div>
    )
}

export default TaskList;