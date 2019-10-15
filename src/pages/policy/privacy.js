import React from "react"
import { injectIntl } from "gatsby-plugin-intl"
import Layout from "@components/templates/layout"
import SEO from "@components/seo"
import Breadcrumb from "@components/molecules/breadcrumb"
import PrivacyPolicy from "@components/organisms/privacy-policy"

const PrivacyPolicyPage = ({intl}) => (
  <Layout intl={intl} page="privacy-policy" >
    <SEO lang={intl.locale} title={intl.formatMessage({ id: 'privacy-policy' })} keywords={[`${intl.formatMessage({ id: 'privacy-policy' })}`]} />
    <Breadcrumb breadcrumbs={[
      { to: '/', label: intl.formatMessage({ id: 'home' }) },
      { to: `/policy/privacy`, label: intl.formatMessage({ id: 'privacy-policy' }), active: true },
    ]}
    />
    <PrivacyPolicy
      intl={intl}
    />
  </Layout>
)

export default injectIntl(PrivacyPolicyPage)