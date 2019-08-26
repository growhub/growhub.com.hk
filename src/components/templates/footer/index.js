import React from "react"
import { Link } from "gatsby-plugin-intl"
import Image from "@components/atoms/image";
import styles from "./footer.module.css"

const Footer = ({ intl, page, siteTitle }) => (
<footer>
  {'contact' !== page && 'contact/thanks' !== page && (
    <div className="bg-gradient-red-to-orange text-white px-5 py-10">
      <p className="text-2xl lg:text-3xl text-center mb-10">
        {intl.formatMessage({ id: 'footer_please-contact' })}
      </p>
      <Link to='/contact' className="block lg:w-1/3 lg:mx-auto hover:underline text-red-500 text-center bg-white font-bold rounded-full my-6 py-4 px-8 shadow-lg">
        {intl.formatMessage({ id: 'contact' })}
      </Link>
    </div>
  )}
  <div className={styles.container}>
    <div className="flex flex-wrap justify-center mb-8 text-lg">
        <Link to='/' className="mx-2 mb-2">
          {intl.formatMessage({ id: 'home' })}
        </Link>
        <Link to='/policy/privacy' className="mx-2 mb-2">
          {intl.formatMessage({ id: 'privacy-policy' })}
        </Link>
        <Link to='/contact' className="mx-2 mb-2">
          {intl.formatMessage({ id: 'contact' })}
        </Link>
    </div>
    <div className={styles.copyright}>
      Copyright © {new Date().getFullYear()} {siteTitle}.
    </div>
    <Link to='/made-with' className={styles.madeWith}>
      made with GatsbyJS
      <div
        className="ml-1"
        style={{ width: `20px` }}
      >
        <Image filename="gatsby-icon.png" alt="GatsbyJS"　/>
      </div>
    </Link>
  </div>
</footer>
)

export default Footer
