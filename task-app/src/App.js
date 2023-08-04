import './App.css';
import InputItem from './components/Input.js';
import TaskForm from './components/TaskForm';

const taskItems = [
  {id: 'cd1', task: 'laundry'},
  {id: 'cd2', task: 'Washing'}
]

const addTaskHandler = task => {
  console.log('in app.js');
  console.log(task);
}


function App() {

  const saveTaskDataHandler = (enteredTaskData) => {
    const tasksData = {
      ...enteredTaskData,
      id: Math.random().toString()
    }
    console.log(tasksData);
  };

  return (
    <div>
      <TaskForm onSaveTaskData={saveTaskDataHandler} onAddTask={addTaskHandler}/>
      <InputItem tasks={taskItems[0]}/>
      <InputItem tasks={taskItems[1]}/>
    </div>
  );
}

export default App;
