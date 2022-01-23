import PropTypes from "prop-types";

import { StyledTodoListItemContainer, StyledTodoListItemTitle } from "./styled";

export function TodoListItem({ title, dark, className = '', onClick = (event) => event }) {
  return (
    <StyledTodoListItemContainer>
      <StyledTodoListItemTitle
        title={title}
        dark={dark}
        className={className}
        onClick={onClick}
      />
    </StyledTodoListItemContainer>
  )
}

TodoListItem.propTypes = {
  title: PropTypes.string.isRequired,
  dark: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func
}
