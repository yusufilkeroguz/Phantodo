import styled, { css } from 'styled-components';

import { Button } from '../../atoms/Button';

export const StyledButton = styled(Button)`
  border: 1px solid #000000;
  padding: 8px 16px;
  font-size: 18px;
  border-radius: 8px;
  background-color: #FFFFFF;
  color: #000000;

  ${props => props.dark && css`
    color: #FFFFFF;
    background-color: #000000;
    border-color: #FFFFFF;
  `}
`
