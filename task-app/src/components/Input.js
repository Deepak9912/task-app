import classes from './Input.module.css';


const Input = (props) => {
    return (
            <div className={classes.form}>
                <div>{props.task}</div>
            </div>
    )
}

export default Input;