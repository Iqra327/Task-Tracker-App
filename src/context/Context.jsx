import React, { createContext, useState } from 'react';

export const Tasks = createContext();

const Context = ({children}) => {
  const [allTasks, setAllTasks] = useState([]);

  return (
    <Tasks.Provider value={{allTasks, setAllTasks}}>
      {children}
    </Tasks.Provider>
  )
}

export default Context;