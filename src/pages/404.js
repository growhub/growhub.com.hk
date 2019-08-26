import React from "react"
import { injectIntl, Link } from "gatsby-plugin-intl"

import Layout from "@components/templates/layout"
import SEO from "@components/seo"
import NotFoundSVG from "@contents/svg/undraw_page_not_found_su7k.svg"

const NotFoundPage = ({intl}) => (
  <Layout intl={intl} page="404" >
    <SEO title="404: Not found" />
    <section className="mt-10 container mx-auto">
      <div className="flex justify-center">
        <div className="lg:w-2/3 p-4 text-center">
          <div className="my-10">
            <img src={NotFoundSVG} alt="Not Found" className="h-60 mx-auto" />
          </div>
          <h1 className="text-5xl mt-10">
            Not Found
          </h1>
          <div className="my-4 flex justify-center">
            <Link to='/' className="inline-block mx-auto lg:mx-0 hover:opacity-75 bg-red-500 text-white font-bold text-xl rounded-full my-6 py-4 px-8 shadow-lg">
              Go to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default injectIntl(NotFoundPage)
