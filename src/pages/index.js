import React from "react"
import { graphql } from 'gatsby'
import { injectIntl } from "gatsby-plugin-intl"
import Layout from "@components/templates/layout"
import SEO from "@components/seo"
import Home from "@components/organisms/home"

const IndexPage = ({ intl, data }) => (
  <Layout intl={intl} page="home" >
    <SEO lang={intl.locale} title={data.site.siteMetadata.title} keywords={[`Home`]} />
    <Home
      intl={intl}
      siteTitle={data.site.siteMetadata.title}
    />
  </Layout>
)

export default injectIntl(IndexPage)


export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`
