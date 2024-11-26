import React, { useContext } from 'react'
import { Tasks } from '../context/Context';

const CompletedTasks = () => {
  const {allTasks, setAllTasks} = useContext(Tasks);

  return (
    <div className='all-tasks-display'>
      {allTasks?.map((task) => (
        <div key={task.id} className='task-div'>
          <p>{task.text}</p>
        </div>
      ))}
    </div>
  )
}

export default CompletedTasks