import './App.css';
import InputItem from './components/Input.js';
import TaskForm from './components/TaskFrom';

const taskItems = [
  {id: 'cd1', task: 'laundry'},
  {id: 'cd2', task: 'Washing'},
  {id: 'cd3', task: 'Shopping'},
  {id: 'cd4', task: 'Holidays'}
]

function App() {
  return (
    <div>
      <TaskForm />
      <InputItem tasks={taskItems[0]}/>
      <InputItem tasks={taskItems[1]}/>
      <InputItem tasks={taskItems[2]}/>
      <InputItem tasks={taskItems[3]}/>
    </div>
  );
}

export default App;
