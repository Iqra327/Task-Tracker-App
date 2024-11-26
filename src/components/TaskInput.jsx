import React, { useContext, useState } from 'react';
import { v4 as uuid } from 'uuid';
import Button from './Button'
import { Tasks } from '../context/Context';

const TaskInput = () => {
  const [input, setInput] = useState('');
  const {allTasks, setAllTasks} = useContext(Tasks);
  
  console.log(input);

  const addTask = () => {
    if (input.trim() !== '') {
      setAllTasks([
        ...allTasks,
        {
        id: uuid(),
        text: input
      }]);
      setInput('');
    }
  }

  return (
    <div className='taskInput-div'>
      <input
        type='text'
        placeholder='Enter Task'
        className='taskInput'
        value={input}
        onChange={(e) => setInput(e.target.value)} 
      />
      <Button onClick={addTask} className='btn-add-task'>
        Add Task
      </Button>
    </div>
  )
}

export default TaskInput