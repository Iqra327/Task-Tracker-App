import React, { useContext } from 'react'
import { Tasks } from '../context/Context';
import Button from './Button';

const CompletedTasks = () => {
  const {completedTasks, setCompletedTasks, allTasks} = useContext(Tasks);

  const deleteTask = (id) => {
    const updatedTasks =  allTasks.filter((task) => (
       task.id !== id
    ))
    setCompletedTasks(updatedTasks)
  }

  return (
    <div className='all-tasks-display'>
      {completedTasks?.map((task) => (
        <div key={task.id} className='task-div'>
          <p>{task.text}</p>
          <Button 
            className='btn-delete-task' 
            onClick={() => deleteTask(task.id)}
          >
            Delete
          </Button>
        </div>
      ))}
    </div>
  )
}

export default CompletedTasks