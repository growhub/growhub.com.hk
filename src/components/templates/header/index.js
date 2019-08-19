import PropTypes from "prop-types"
import React from "react"
import { Link, IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"
import 'typeface-lato'
import styles from "./header.module.css"

const languageName = {
  en: "EN",
  "zh-hk": "繁",
  ja: "日",
}

class Header extends React.Component  {
  constructor(props) {
    super(props)
    this.state = { drawer: false }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
  }

  handleClick() {
    this.setState(prevState => ({
      drawer: !prevState.drawer
    }));
  }

  render() {
    const { intl, siteTitle } = this.props
    return (
      <header
        className={styles.header}
      >
        <div className={styles.container}>
          <div className={styles.box}>
            <div>
              <h1 className={styles.title}>
                <Link
                  to="/"
                  className={styles.logo}
                >
                  {siteTitle}_<sup>HK</sup>
                </Link>
              </h1>
            </div>
            <div className="block lg:hidden">
              <button
                className="flex items-center mr-2 px-3 py-2 border rounded text-gray-900 border-gray-900"
                onClick={this.handleClick}
              >
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
              </button>
            </div>
            <div
              className={[
                'w-full block lg:flex lg:items-center lg:w-auto',
                this.state.drawer ? 'block' : 'hidden'
              ].join(' ')}
            >
              <Link to='/' className={styles.menuLink}>
                {intl.formatMessage({ id: 'home' })}
              </Link>
              <Link to='/company' className={styles.menuLink}>
                {intl.formatMessage({ id: 'company' })}
              </Link>
              <Link to='/services' className={styles.menuLink}>
                {intl.formatMessage({ id: 'services' })}
              </Link>
              <Link to='/contact' className={styles.menuLink}>
                {intl.formatMessage({ id: 'contact' })}
              </Link>
              <div className={styles.langageLinkWrap}>
                <IntlContextConsumer>
                  {({ languages, language: currentLocale }) =>
                    languages.map(language => (
                      <>
                        <button
                          key={language}
                          onClick={() => changeLocale('ja' === language ? '' : language)}
                          className={(language === currentLocale ? 'font-bold text-red-500' : '')}
                        >
                          {languageName[language]}
                        </button>
                        {('zh-hk' !== language ? <span>|</span> : '')}
                      </>
                    ))
                  }
                </IntlContextConsumer>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  scrollY: PropTypes.number,
}

Header.defaultProps = {
  siteTitle: ``,
  scrollY: 0,
}


export default Header
