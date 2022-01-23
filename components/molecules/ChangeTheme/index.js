import { Fragment } from 'react';

import { ThemeSwitcher } from '../ThemeSwitcher';

import { useTheme } from '../../../hooks/useTheme';

export function ChangeTheme() {
  const { themeName, changeTheme } = useTheme();

  return (
    <Fragment>
      <ThemeSwitcher themeName={themeName} changeTheme={changeTheme} />
    </Fragment>
  )
}
