import React, { Fragment } from 'react';

import { StyledThemeSwitcher, HiddenCheckbox } from './styled';

export function ThemeSwitcher({ themeName, changeTheme = (_) => _ }) {
  return (
    <Fragment>
      <StyledThemeSwitcher dark={themeName === 'dark'} onClick={() => changeTheme()} />
    </Fragment>
  )
}
