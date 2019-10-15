import React from "react"
import { Link } from "gatsby-plugin-intl"

const PrivacyPolicyEN = ({intl}) => (
  <>
    <h3 className="mb-4">
      <strong>1. Information Collection</strong>
    </h3>
    <p>
      In this policy, personal information refers to personally identifiable information that can be used to identify you and is regulated by laws on privacy protection. This may include information like your name, e-mail address and phone number.<br/>
      While using our site, we may ask you to provide us with your personal information. In that case, we shall ask for your agreement and specify when we collect your personal information or give it to any third party. We shall not do this without your consent. <br/>
      Moreover, we will not process your personal information or integrate it with the information we indirectly obtained from sources such as third parties, name lists, and address books.<br/>
    </p>

    <h3 className="mt-10 mb-4">
      <strong>2. Personal Information And Its Usage</strong>
    </h3>
    <p>
      When you use this site, we may ask you to register your personal information such as your name when you contact us. We shall only use your information for the purposes you provide it to us for. We may use the information to respond to you, answer your questions and to send you documents or emails. 
    </p>

    <h3 className="mt-10 mb-4">
      <strong>3. Giving Your Information to Us</strong>
    </h3>
    <p>
      We manage and store your personal information appropriately, and we shall not disclose your private information, except for the following cases:<br/>
      - when we have your permission to do so.<br/>
      - when we are required to disclose your personal information by laws or regulations.<br/>
    </p>

    <h3 className="mt-10 mb-4">
      <strong>4. Security</strong>
    </h3>
    <p>
      We shall take necessary safety countermeasures against unauthorized access from a third party, and will take the necessary security measures to protect your private information.
    </p>

    <h3 className="mt-10 mb-4">
      <strong>5. Inquiries on Privacy Policies</strong>
    </h3>
    <p>
      If you wish to inquire about, correct or delete your private information, we shall respond to your request after confirming identification.
    </p>

    <h3 className="mt-10 mb-4">
      <strong>6. Cookies</strong>
    </h3>
    <p>
      We use technology called "Cookies" to help us improve your user experience on this site. A cookie is a small file that can be placed on your device from our server that allows us to recognize and remember you.<br/>
      We use cookies to analyze our web traffic.
    </p>

    <h3 className="mt-10 mb-4">
      <strong>7. Access Logs</strong>
    </h3>
    <p>
      On the website, your access information is stored as a log. The information includes your IP address, your OS or device information and access date. We shall not use such information to identify a particular individual. Your access log is used to manage our website and analyze usage stats.
    </p>

    <h3 className="mt-10 mb-4">
      <strong>8. Laws</strong>
    </h3>
    <p>
    We, GrowHub, follow the laws of Hong Kong on private information, and shall revise the privacy policy in accordance to it as needed.
    </p>

    <h3 className="mt-10 mb-4">
      <strong>9. Questions</strong>
    </h3>
    <p>
      Please contact us, using the address below, about our privacy policy.
    </p>
    <p class="mt-4">
      <strong>GrowHub Limited</strong><br/>
      <strong>FLAT 6A 14/F BLK A FUK KEUG IND BLDG 66-68 TONG MI RD PRINCE EDWARD KL</strong><br/>
    </p>
    <Link to='/contact' className="inline-block mx-auto lg:mx-0 hover:underline bg-red-500 text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg">
      {intl.formatMessage({ id: 'contact' })}
    </Link>
  </>
)

export default PrivacyPolicyEN
