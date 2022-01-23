import { AddTodoItem } from '../../molecules/AddTodoItem';
import { TodoList } from '../../molecules/TodoList';

import { StyledMain } from './styled'; 

export function Main() {
  return (
    <StyledMain>
      <AddTodoItem />
      <TodoList />
    </StyledMain>
  )
}
