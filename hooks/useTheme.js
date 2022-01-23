import React, { useContext } from 'react';
import { ThemeContext } from '../context';

export function useTheme() {
  const { themeName, changeTheme } = useContext(ThemeContext);

  return {
    themeName,
    changeTheme,
    isThemeDark: themeName === 'dark'
  }
}

export default useTheme;