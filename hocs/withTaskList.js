import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import { TaskListContext } from '../context';

export const withTaskList = (Component) => {
  return () => {
    const [tasks, setTasks] = useState([]);
    
    const addTask = ({ title }) => {
      setTasks([
        ...tasks,
        {
          id: uuidv4(),
          title,
          complete: false
        }
      ])
    }

    const setTaskStatus = ({ id }) => {
      setTasks(tasks.map(task => task.id === id ? { ...task, complete: !task.complete } : task))
    }

    const deleteCompletedTasks = () => {
      setTasks(tasks.filter(task => task.complete === false))
    }

    return (
      <TaskListContext.Provider value={{ tasks: tasks, addTask, setTaskStatus, deleteCompletedTasks }}>
        <Component />
      </TaskListContext.Provider>
    )
  }
}
