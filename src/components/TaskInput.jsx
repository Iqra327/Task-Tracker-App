import React, { useState } from 'react'
import Button from './Button'

const TaskInput = () => {
  const [input, setInput] = useState('');
  console.log(input);
  
  return (
    <div className='taskInput-div'>
      <input
        type='text'
        placeholder='Enter Task'
        className='taskInput'
        value={input}
        onChange={(e) => setInput(e.target.value)} 
      />
      <Button>Add Task</Button>
    </div>
  )
}

export default TaskInput