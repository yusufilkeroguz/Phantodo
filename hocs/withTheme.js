import React, { useState } from "react";

import { ThemeContext } from "../context";

export const withTheme = (Component) => {
  return () => {
    const [themeName, setTheme] = useState('light');

    const changeTheme = () => {
      setTheme(themeName === 'light' ? 'dark' : 'light')
    }

    return (
      <ThemeContext.Provider value={{ themeName, changeTheme }}>
        <Component />
      </ThemeContext.Provider>
    )
  }
}
