import React, { useContext } from 'react'
import { Tasks } from '../context/Context'
import Button from './Button';

const TaskList = () => {
  const {allTasks, setAllTasks} = useContext(Tasks);
  
  const deleteTask = (id) => {
    const updatedTasks =  allTasks.filter((task) => (
       task.id !== id
    ))
    setAllTasks(updatedTasks)
  }

  return (
    <div className='all-tasks-display'>
      {allTasks?.map((task) => (
        <div key={task.id} className='task-div'>
          <p>{task.text}</p>
          <div className='btns-div'>
            <Button 
              className='btn-delete-task' 
              onClick={() => deleteTask(task.id)}
            >
              Done
            </Button>
            <Button 
              className='btn-delete-task' 
              onClick={() => deleteTask(task.id)}
            >
              Delete
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TaskList