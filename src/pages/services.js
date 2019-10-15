import React from "react"
import { injectIntl } from "gatsby-plugin-intl"
import Layout from "@components/templates/layout"
import SEO from "@components/seo"
import Breadcrumb from "@components/molecules/breadcrumb"
import Services from "@components/organisms/services"

const SrevicesPage = ({intl}) => (
  <Layout intl={intl} page="services" >
    <SEO lang={intl.locale} title={intl.formatMessage({ id: 'services' })} keywords={[`${intl.formatMessage({ id: 'services' })}`]} />
    <Breadcrumb breadcrumbs={[
      { to: '/', label: intl.formatMessage({ id: 'home' }) },
      { to: `/services`, label: intl.formatMessage({ id: 'services' }), active: true },
    ]}
    />
    <Services
      intl={intl}
    />
  </Layout>
)

export default injectIntl(SrevicesPage)