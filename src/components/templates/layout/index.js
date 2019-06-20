/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "../header"
import Footer from "../footer"

import styles from "./layout.module.css"

class Layout extends React.Component  {
  constructor(props) {
    super(props)
    this.state = { y: 0 }
  }

  componentDidMount() {
    window.addEventListener('scroll', () => this.setState({ y: window.scrollY }))
  }

  render() {
    const { intl, children } = this.props
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
                author
              }
            }
          }
        `}
        render={data => (
          <div className={styles.wrap}>
            <Header
              intl={intl}
              siteTitle={data.site.siteMetadata.title}
              scrollY={this.state.y}
            />
            <main className={styles.main}>
                {children}
            </main>
            <Footer
              intl={intl}
              siteTitle={data.site.siteMetadata.title}
            />
          </div>
        )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
