import { useState } from 'react';

import { useTasks } from '../../../hooks/useTasks';

import { FormInputWithLabel } from '../FormInputWithLabel';

export function AddTodoItem() {
  const { addTask } = useTasks()
  const [ taskTitle, setTaskTitle ] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    addTask({
      title: taskTitle
    });

    event.target.reset();
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <FormInputWithLabel
        input={{ type: 'text', onChange: (taskTitle) => setTaskTitle(taskTitle) }}
        label={{ title: 'Task Name:' }}
      />
    </form>
  )
}