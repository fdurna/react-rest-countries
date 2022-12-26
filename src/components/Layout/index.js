import React from "react";
import {LayoutStyled} from './index.styles'
// components
import Header from '../Header'
// styles
const Layout = ({ children, toggleTheme }) => {
  return (
    <LayoutStyled>
      <Header toggleTheme={toggleTheme} />
      <main>{children}</main>
    </LayoutStyled>
  );
};

export default Layout;
