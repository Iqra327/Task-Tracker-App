import React, { useContext } from 'react'
import { Tasks } from '../context/Context'
import Button from './Button';

const TaskList = () => {
  const {allTasks, setAllTasks, completedTasks, setCompletedTasks} = useContext(Tasks);
  
  const deleteTask = (id) => {
    const updatedTasks =  allTasks.filter((task) => (
       task.id !== id
    ))
    setAllTasks(updatedTasks)
  }

  const completeTask = (id) => {
    const updatedTasks = allTasks.find((task) => task.id === id );
    setCompletedTasks([...completedTasks, updatedTasks]);
    setAllTasks(allTasks.filter((task) => (
      task.id !== id
   )));
  }

  return (
    <div className='all-tasks-display'>
      {allTasks?.map((task) => (
        <div key={task.id} className='task-div'>
          <p>{task.text}</p>
          <div className='btns-div'>
            <Button
              className='btn-done-task' 
              onClick={() => completeTask(task.id)}
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