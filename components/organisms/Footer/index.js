import { ClearCompletedTasks } from '../../molecules/ClearCompletedTasks';

import { StyledFooter } from "./styled";

export function Footer() {
  return (
    <StyledFooter>
      <ClearCompletedTasks />
    </StyledFooter>
  )
}
