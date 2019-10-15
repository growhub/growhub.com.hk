import React from "react"
import { injectIntl } from "gatsby-plugin-intl"
import Layout from "@components/templates/layout"
import SEO from "@components/seo"
import Breadcrumb from "@components/molecules/breadcrumb"
import MadeWith from "@components/organisms/made-with"

const MadeWithPage = ({ intl }) => (
  <Layout intl={intl} page="made-with" >
    <SEO lang={intl.locale} title="Made with" keywords={[`gatsby`, `react`, `tailwindcss`]} />
    <Breadcrumb breadcrumbs={[
      { to: '/', label: intl.formatMessage({ id: 'home' }) },
      { to: `/made-with`, label: 'Made with', active: true },
    ]}
    />
    <MadeWith
      intl={intl}
    />
  </Layout>
)

export default injectIntl(MadeWithPage)

