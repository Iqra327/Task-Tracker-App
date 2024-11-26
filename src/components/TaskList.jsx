import React, { useContext } from 'react'
import { Tasks } from '../context/Context'
import Button from './Button';

const TaskList = () => {
  const {allTasks} = useContext(Tasks);

  return (
    <div className='all-tasks-display'>
      {allTasks?.map((task) => (
        <div key={task.id} className='task-div'>
          <p>{task.text}</p>
          <Button className='btn-delete-task'>
            Delete
          </Button>
        </div>
      ))}
    </div>
  )
}

export default TaskList