import React from "react"
import loadable from '@loadable/component'
import Title from "@components/atoms/title"

const PrivacyPolicy = ({intl}) => {
  const LocaleComponent = loadable(() => import(`./lang/${intl.locale}`))
  return (
    <>
      <div className="container mx-auto">
        <Title title={intl.formatMessage({ id: 'privacy-policy' })} subtitle={intl.formatMessage({ id: 'privacy-policy_subtitle' })} />
      </div>
      <div className="bg-white mt-10 py-10">
        <div className="container mx-auto">
          
          <div
            className="px-4 lg:px-8 pt-6 pb-8"
          >
            <LocaleComponent intl={intl} />
          </div>
        </div>
      </div>
    </>
  )
}

export default PrivacyPolicy
