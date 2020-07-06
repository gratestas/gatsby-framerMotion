import React, { useEffect } from "react"
import { Link } from 'gatsby'

import { HeaderNav, Logo, Menu } from '../styles/headerStyles'
import { Container, Flex } from '../styles/globalStyles'

import { useGlobalStateContext, useGlobalDispatchContext } from '../context/globalContext'

const Header = ({ onCursor, setToggleMenu, toggleMenu  }) => {
  const dispatch = useGlobalDispatchContext();
  const { currentTheme } = useGlobalStateContext();

  const toggleTheme = () => {
    currentTheme === 'dark'
      ? dispatch({ type: 'TOGGLE_THEME', theme: 'light' })
      : dispatch({ type: 'TOGGLE_THEME', theme: 'dark' })
  }

  // useEffect hook is used for keeping theme set after page refresh
  useEffect(() => {
    window.localStorage.setItem('theme', currentTheme)
  }, [currentTheme])

  return (
    <HeaderNav
      animate={{ y: 0, opacity: 1 }} initial={{ y: -72, opacity: 0 }} transition={{ duration: 1, ease: [.6, .05, -.01, .9] }}
    >
      <Container >
        {console.log(currentTheme)}
        <Flex spaceBetween noHeight>
          <Logo
            onMouseEnter={() => onCursor('hovered')}
            onMouseLeave={onCursor}
          >
            <Link to='/'>FURR</Link>
            <span
              onClick={toggleTheme}
              onMouseEnter={() => onCursor('pointer')}
              onMouseLeave={onCursor}
            ></span>
            <Link to='/'>W</Link>
          </Logo>
          <Menu onClick={() => setToggleMenu(!toggleMenu)}>
            <button>
              <span></span>
              <span></span>
            </button>
          </Menu>
        </Flex>
      </Container>
    </HeaderNav >
  )
}

export default Header;
