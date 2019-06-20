import React from "react"
import { Link } from "gatsby-plugin-intl"
import Image from "@components/atoms/image";
import styles from "./footer.module.css"

const Footer = ({ intl, siteTitle }) => (
<footer>
  <div className={styles.container}>
    <div className="flex justify-center mb-8 text-lg">
        <Link to='/contact' className="mx-2">
          {intl.formatMessage({ id: 'home' })}
        </Link>
        <Link to='/policy/privacy' className="mx-2">
          {intl.formatMessage({ id: 'privacy-policy' })}
        </Link>
        <Link to='/contact' className="mx-2">
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
