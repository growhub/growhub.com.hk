import React from "react"
import Title from "@components/atoms/title"
import styles from "./company.module.css"

const Company = ({intl}) => (
  <>
    <div className="container mx-auto">
      <Title title={intl.formatMessage({ id: 'company' })} subtitle="" />
    </div>
    <div className="bg-white mt-10 py-10">
      <div className="container mx-auto">
        <div className="flex">
          <div className="lg:w-3/5 mx-auto p-4">

            <table
              className={styles.table}
            >
              <tbody>
                <tr>
                  <th>{intl.formatMessage({ id: 'company_company-name-label' })}</th>
                  <td>{intl.formatMessage({ id: 'company_company-name' })}</td>
                </tr>
                <tr>
                  <th>{intl.formatMessage({ id: 'company_ceo-label' })}</th>
                  <td>{intl.formatMessage({ id: 'company_ceo' })}</td>
                </tr>
                <tr>
                  <th>{intl.formatMessage({ id: 'company_foundation-label' })}</th>
                  <td>{intl.formatMessage({ id: 'company_foundation' })}</td>
                </tr>
                <tr>
                  <th>{intl.formatMessage({ id: 'company_address-label' })}</th>
                  <td>{intl.formatMessage({ id: 'company_address' })}</td>
                </tr>
              </tbody>
            </table>

          </div>
        </div>
      </div>
    </div>
  </>
)

export default Company
