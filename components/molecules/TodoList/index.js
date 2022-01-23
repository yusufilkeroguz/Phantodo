import { useTasks } from '../../../hooks/useTasks';
import { useTheme } from '../../../hooks/useTheme';

import { TodoListItem } from '../TodoListItem';

export function TodoList() {
  const { tasks, setTaskStatus } = useTasks();
  const { isThemeDark } = useTheme();

  if(tasks) {
    return tasks.map((task, key) => (
      <TodoListItem
        key={key}
        className={task.complete ? 'done' : ''}
        dark={isThemeDark}
        title={task.title}
        onClick={() => setTaskStatus({ id: task.id })}
      />
    ))
  }

  return null;
}
