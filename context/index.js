import React, { createContext } from 'react';

export const TaskListContext = createContext({
  tasks: [],
  addTask: () => {},
  setTaskStatus: ({ id }) => {},
  deleteCompletedTasks: () => {},
});

export const ThemeContext = createContext({ themeName: '', changeTheme: () => {} });
