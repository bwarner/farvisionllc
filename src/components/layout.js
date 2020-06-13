/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Global, css } from "@emotion/core"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import "normalize.css"

import "./baikal.css"

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
      <Global
        styles={css`
          body {
            font-family: "PT Serif", serif;
            font-size: 18px;
            background-color: white;
            color: black;
          }
        `}
      />
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Serif&display=swap"
          rel="stylesheet"
        />
        <title>{data.site.siteMetadata.title}</title>
      </Helmet>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
