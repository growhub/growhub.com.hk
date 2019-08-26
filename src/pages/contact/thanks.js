import React from "react"
import { injectIntl } from "gatsby-plugin-intl"
import Layout from "@components/templates/layout"
import SEO from "@components/seo"
import Breadcrumb from "@components/molecules/breadcrumb"
import ContactThanks from "@components/organisms/contact-thanks"

const ContactThanksPage = ({intl}) => (
  <Layout intl={intl} page="contact/thanks" >
    <SEO title={intl.formatMessage({ id: 'contact-thanks_title' })} keywords={[`${intl.formatMessage({ id: 'contact' })}`]} />
    <Breadcrumb breadcrumbs={[
      { to: '/', label: intl.formatMessage({ id: 'home' }) },
      { to: `/contact`, label: intl.formatMessage({ id: 'contact' }) },
      { to: `/contact/thanks`, label: intl.formatMessage({ id: 'contact-thanks_title' }), active: true },
    ]}
    />
    <ContactThanks
      intl={intl}
    />
  </Layout>
)

export default injectIntl(ContactThanksPage)