/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"

import "./layout.css"
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { normalize } from 'styled-normalize'

import Header from './header'
import Cursor from '../components/customCursor'
import Navigation from './navigation'

import { useGlobalStateContext, useGlobalDispatchContext } from '../context/globalContext'

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    text-decoration: none;
    cursor: none;
  }

  html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiesed;
    font-size: 16px;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Helvetica,  Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: ${props => props.theme.background};
    overscroll-behavior: none;
    overflow-x: hidden;
    overflow: visible;
  }
`



const Layout = ({ children }) => {

  const [hamburgerPosition, setHamburgerPosition] = useState({
    x: 0,
    y: 0
  })

  const lightTheme = {
    background: '#fff',
    text: '#000',
    red: '#ea291e',
    left: `${hamburgerPosition.x}px`,
    top: `${hamburgerPosition.y}px`
  }

  const darkTheme = {
    background: '#000',
    text: '#fff',
    red: '#ea291e',
    left: `${hamburgerPosition.x}px`,
    top: `${hamburgerPosition.y}px`
  }

  const { currentTheme, cursorStyles } = useGlobalStateContext();
  const dispatch = useGlobalDispatchContext();

  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
    // updates global state
    dispatch({ type: 'CURSOR_TYPE', cursorType: cursorType })
  }

  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <ThemeProvider theme={currentTheme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Cursor toggleMenu={toggleMenu} />
      <Header
        onCursor={onCursor}
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
        hamburgerPosition={hamburgerPosition}
        setHamburgerPosition={setHamburgerPosition}
      />
      <Navigation
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
        onCursor={onCursor}
      />
      <main>{children}</main>
    </ThemeProvider>
  )
}




Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
