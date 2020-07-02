/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Head from '../components/head'

import Header from "./header"
import Playbar from "./playbar"
import Aside from "./aside"
import "./layout.css"
import "./stylesheet.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
    <Head title = {data.site.siteMetadata.title} />
    <div className="wrapper">
        <Header siteTitle={data.site.siteMetadata.title} />

        <main>
            <Playbar />
            {children}
        </main>
        <Aside />

    </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
