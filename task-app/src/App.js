import './App.css';
import Input from './components/Input.js';

const taskItems = [
  {id: 'cd1', task: 'laundry'},
  {id: 'cd2', task: 'Washing'},
  {id: 'cd3', task: 'Shopping'},
  {id: 'cd4', task: 'Holidays'}
]

function App() {
  return (
    <div>
      <Input id={taskItems[0].id} task={taskItems[0].task} />
      <Input id={taskItems[1].id} task={taskItems[1].task}/>
      <Input id={taskItems[2].id} task={taskItems[2].task}/>
      <Input id={taskItems[3].id} task={taskItems[3].task}/>
    </div>
  );
}

export default App;
