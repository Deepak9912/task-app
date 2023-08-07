import { useState } from 'react';
import './App.css';
import TaskList from './components/TaskList.js';
import TaskForm from './components/TaskForm';


function App() {

  const [taskInput, setTaskInput] = useState([]);

  const saveTaskDataHandler = (enteredTaskData) => {
    setTaskInput([...taskInput, enteredTaskData])
  };

  return (
    <div>
      <TaskForm onSaveTaskData={saveTaskDataHandler} />
      {TaskList.map((taskItem, i) => {
        return (
          <TaskList item={taskItem} index={i} />
        )
      })}
    </div>
  );
}

export default App;
