import React from "react"
import Title from "@components/atoms/title"

const Contact = ({intl}) => (
  <>
    <div className="container mx-auto">
      <Title title={intl.formatMessage({ id: 'contact' })} subtitle="こちらからお問い合わせください" />
    </div>
    <div className="bg-white mt-10 py-10">
      <form
        name="contact"
        method="post"
        className="container mx-auto"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contact" /> 

        <div className="lg:flex mx-3 mb-6">
          <div className="lg:w-1/2 px-3 mb-6 md:mb-0">
            <label
                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                htmlFor="name"
              >
                {intl.formatMessage({ id: 'contact_form_name' })}
            </label>
            <input
              id="name"
              type="text"
              name="name"
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              required
            />
          </div>
          <div className="lg:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="email">
              {intl.formatMessage({ id: 'contact_form_email' })}
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="example@sample.com"
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-grey"
              required
            />
          </div>
        </div>
          <div className="mx-3 mb-6 px-3">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="content">
                {intl.formatMessage({ id: 'contact_form_content' })}
            </label>
            <textarea
              name="content"
              rows="6"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3 bg-grey-lighter focus:outline-none focus:bg-white"
              required
            ></textarea>
          </div>

          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="w-2/3 bg-red-500 text-lg text-white font-bold py-4 px-8 border-b-4 hover:opacity-75 rounded"
            >
              {intl.formatMessage({ id: 'contact_form_submit' })}
            </button>
          </div>
      </form>
    </div>
  </>
)

export default Contact
