import styled, { css } from 'styled-components';

import { Checkbox } from '../../atoms/Checkbox';

export const HiddenCheckbox = styled(Checkbox)`
  display: none;
`

export const StyledThemeSwitcher = styled.div`
  margin:0;
	padding:0;
	width:48px;
	height:28px;
	border: 1px solid #FFFFFF;
	outline:none;
	overflow:hidden;
	position:relative;
	border-radius:14px;
	display:inline-block;
	background:#000000;

  &, &::before, &::after {
    transition:all 200ms ease-in-out;
  }

  &::before {
    top:4px;
    left:24px;
    content:"";
    width:20px;
    height:20px;
    display:block;
    position:absolute;
    border-radius:12px;
    background:#FFFFFF;
  }

  &::after {
    content: "";
    top: 14px;
    right: 2px;
    width: 1px;
    height: 1px;
    display: block;
    position: absolute;
    border-radius: 0.5px;
    background: #000000;
  }

  ${props => props.dark && css`
    & {
      background: #FFFFFF;
      border-color: #000000;
    }

    &::before {
      left: 4px;
      background: #000000;
    }

    &::after {
      top: -2px;
      right: 2px;
      width: 32px;
      height: 32px;
      border-radius: 16px;
      background: #FFFFFF;
    }`
  }
`
