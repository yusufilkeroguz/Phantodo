import React, { useContext } from 'react';
import { TaskListContext } from '../context';

export function useTasks() {
  return useContext(TaskListContext);
}

export default useTasks;