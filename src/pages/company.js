import React from "react"
import { injectIntl } from "gatsby-plugin-intl"
import Layout from "@components/templates/layout"
import SEO from "@components/seo"
import Breadcrumb from "@components/molecules/breadcrumb"
import Company from "@components/organisms/company"

const CompanyPage = ({intl}) => (
  <Layout intl={intl} page="company" >
    <SEO lang={intl.locale} title={intl.formatMessage({ id: 'company' })} keywords={[`${intl.formatMessage({ id: 'company' })}`]} />
    <Breadcrumb breadcrumbs={[
      { to: '/', label: intl.formatMessage({ id: 'home' }) },
      { to: `/company`, label: intl.formatMessage({ id: 'company' }), active: true },
    ]}
    />
    <Company
      intl={intl}
    />
  </Layout>
)

export default injectIntl(CompanyPage)