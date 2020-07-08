import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeBanner from "../components/homePage/HomeBanner"
import HomeContent from "../components/homePage/HomeContent"

import { useGlobalStateContext, useGlobalDispatchContext } from '../context/globalContext'
import HomeFeatured from "../components/homePage/HomeFeatured"
import HomeAbout from "../components/homePage/HomeAbout"

const IndexPage = props => {

  const { currentTheme, cursorStyles } = useGlobalStateContext();
  const dispatch = useGlobalDispatchContext();

  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
    // updates global state
    dispatch({ type: 'CURSOR_TYPE', cursorType: cursorType })
  }

  return (
    <Layout>
      <SEO title="Home" />
      <HomeBanner onCursor={onCursor}/>
      <HomeContent/>
      <HomeFeatured  onCursor={onCursor}/>
      <HomeAbout/>
    </Layout>
  )
}

export default IndexPage
