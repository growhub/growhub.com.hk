import React from "react"
import { injectIntl } from "gatsby-plugin-intl"
import Layout from "@components/templates/layout"
import SEO from "@components/seo"
import Breadcrumb from "@components/molecules/breadcrumb"
import Contact from "@components/organisms/contact"

const ContactPage = ({intl}) => (
  <Layout intl={intl} >
    <SEO title={intl.formatMessage({ id: 'contact' })} keywords={[`${intl.formatMessage({ id: 'contact' })}`]} />
    <Breadcrumb breadcrumbs={[
      { to: '/', label: intl.formatMessage({ id: 'home' }) },
      { to: `/contact`, label: intl.formatMessage({ id: 'contact' }), active: true },
    ]}
    />
    <Contact
      intl={intl}
    />
  </Layout>
)

export default injectIntl(ContactPage)