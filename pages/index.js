import React, { Fragment } from 'react';
import { createGlobalStyle, css } from 'styled-components';

import { withTheme } from '../hocs/withTheme';
import { withTaskList } from '../hocs/withTaskList';

import { useTheme } from '../hooks/useTheme';

import { Header } from '../components/organisms/Header';
import { Footer } from '../components/organisms/Footer';
import { Main } from '../components/organisms/Main';


const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  background-color: #FFFFFF;
  color: #000000;
  min-height:100vh;
  font-family:Verdana;

  ${props => props.dark && css`
    background-color: #000000;
    color: #FFFFFF;
  `}
}`;

function HomePage() {
  const { isThemeDark } = useTheme();

  return (
    <Fragment>
      <GlobalStyle dark={isThemeDark} />
      <Header />
      <Main />
      <Footer />

    </Fragment>
  )
}

export default withTheme(withTaskList(HomePage));
