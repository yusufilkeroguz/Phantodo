import styled, { css } from 'styled-components';

import { Label } from '../../atoms/Label';

export const StyledTodoListItemContainer = styled.div`
  width: 100%;
  margin-top: 8px;
  text-align: center;
`

export const StyledTodoListItemTitle = styled(Label)`
  padding: 6px 9px;
  border: 1px solid #000000;
  box-sizing: border-box;
  line-height: 100%;
  color: #000000;
  display: inline-block;
  border-radius: 4px;

  &.done {
    border: 1px dashed #DDDDDD;
    color: #DDDDDD;
  }

  ${props => props.dark && css`
    border: 1px solid #FFFFFF;
    color: #FFFFFF;

    &.done {
      border: 1px dashed #323131;
      color: #323131;
    }
  `}
`
