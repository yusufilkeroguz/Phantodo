import { useTasks } from '../../../hooks/useTasks';
import { useTheme } from "../../../hooks/useTheme";

import { StyledButton } from './styled';

export function ClearCompletedTasks() {
  const { deleteCompletedTasks } = useTasks();
  const { isThemeDark } = useTheme();

  return (
    <StyledButton dark={isThemeDark} onClick={() => deleteCompletedTasks()}>
      Clear completed Tasks
    </StyledButton>
  )
}
