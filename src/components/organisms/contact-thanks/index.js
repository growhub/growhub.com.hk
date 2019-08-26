import React from "react"
import { Link } from "gatsby-plugin-intl"
import Title from "@components/atoms/title"

const ContactThanks = ({intl}) => (
  <>
    <div className="container mx-auto">
      <Title
        title={intl.formatMessage({ id: 'contact-thanks_title' })}
        subtitle={'en' === intl.locale ? '' : intl.formatMessage({ id: 'contact-thanks_subtitle' })}
      />
    </div>
    <div className="bg-white mt-10 py-10">
      <p class="w-full mb-10 px-2 text-xl text-center leading-loose whitespace-pre-wrap md:w-3/5 md:mx-auto">{intl.formatMessage({ id: 'contact-thanks_description' })}</p>
      <div className="flex justify-center">
        <Link to='/' className="inline-block mx-auto lg:mx-0 hover:opacity-75 bg-red-500 text-white font-bold text-xl rounded-full my-6 py-4 px-8 shadow-lg">
          Go to Home
        </Link>
      </div>
    </div>
  </>
)

export default ContactThanks
