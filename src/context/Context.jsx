import React, { createContext, useState } from 'react';

export const Tasks = createContext();

const Context = ({children}) => {
  const [allTasks, setAllTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  return (
    <Tasks.Provider value={{allTasks, setAllTasks, completedTasks, setCompletedTasks}}>
      {children}
    </Tasks.Provider>
  )
}

export default Context;