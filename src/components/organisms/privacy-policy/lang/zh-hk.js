import React from "react"
import { Link } from "gatsby-plugin-intl"

const PrivacyPolicyHK = ({intl}) => (
  <>
    <h3 className="mb-4">
      <strong>1. 對於個人資訊的收集方針</strong>
    </h3>
    <p>
      本政策中​所指​的“個人資訊”是指​個人資訊​相關法律規定​所定義​的個人資訊，​包括姓名、電子郵寄地址、電話號碼等​生活中可以識別特定個人的資訊。<br/>
      在​本​網站上請求顧客提供個人資訊的時候，明確​説明進行收集目的及​有可能向​第三者提供​資料​的情况，​會在​得到​客戶的同意​的基礎上​進行。<br/>
      另外，收集到的個人資訊，不會和其他情報源（例如名册、住址明細、第三者等）間接收集的資訊進行合并、加工。​<br/>
    </p>

    <h3 className="mt-10 mb-4">
      <strong>2. 關於收集個人資訊以及利用目的</strong>
    </h3>
    <p>
      在本網站，在處理來自客戶相關詢問之際，會出現需要登記個人姓名·電子郵寄地址，電話號碼等個人資訊的情况。<br/>
      但是，所收集到的個人資訊不會使用在任何提供資訊時的目的以外的情況。<br/>
      對於從客戶処收集到的個人資訊，本公司會用於業務聯絡和疑問的解答，以及發送電子郵件，資料時所使用。<br/>
    </p>

    <h3 className="mt-10 mb-4">
      <strong>3. 關於客戶所提供的個人資訊.</strong>
    </h3>
    <p>
      本公司有義務會對從客戶処收集到的個人資訊進行​妥善管，除​非​符合下列任何情况外，不​會向​​​任何第三者​公開。<br/>
      ・​在得到客戶同意的情况​下。​<br/>
      ・根據現行法例下有需要公開的情况下。<br/>
    </p>

    <h3 className="mt-10 mb-4">
      <strong>4. 關於保障個人資訊的安全以及相關的保安對策</strong>
    </h3>
    <p>
      客戶通過網站提供​相關​個人資訊時，​本公司會盡力防止向任何第三者​泄露​，​保障個人咨詢的​​安全性。
    </p>

    <h3 className="mt-10 mb-4">
      <strong>5. 來自客戶本人的咨詢</strong>
    </h3>
    <p>
      如果收到來自客戶本人希望對於個人資訊的査詢、修改、以及删除的通知，需要在確認本人身份後再進行對應。​
    </p>

    <h3 className="mt-10 mb-4">
      <strong>6. 關於Cookie</strong>
    </h3>
    <p>
      為了使客戶在使用本網站時更加的方便，我們使用了一種名爲Cookie的技術。<br/>
      ​​根據服務器的指令，​​當​客戶在指定的終端登錄網站時，​本技術有效用於識別​客戶的終端​以及顧客訪問的​記錄，​當​​客戶​再次​使用該終端訪問相關網站時，服務器會​​自動識別，使之順暢地能利用。<br/>
      ​導入該技術的目的為調查網站使用的流暢程度。​<br/>
    </p>

    <h3 className="mt-10 mb-4">
      <strong>7. 關於訪問履歷</strong>
    </h3>
    <p>
      本公司會把​客戶​的訪問​網站的情報以履歷的方式以作保存​。<br/>
      被記錄的​履歷包含訪問​者的IP地址，OS​以及​其他終端​的利用情報，訪問日期時間等，​但不會用以特定個人​​​。<br/>
      訪問​履歷用於網站的管理​以及分析​利用狀況​。<br/>
    </p>

    <h3 className="mt-10 mb-4">
      <strong>8. 遵守法例法規，以及重新審視聲明</strong>
    </h3>
    <p>
      本公司對於遵守個人私人情報收集部分會嚴格遵守香港法例，以及其他法律法規，並會及時對於本聲明的内容進行重新審視和調整。
    </p>

    <h3 className="mt-10 mb-4">
      <strong>9. 相關查詢</strong>
    </h3>
    <p>
      如有關於本公司私人情報收集的相關疑問請聯絡以下地址。
    </p>
    <p class="mt-4">
      <strong>GrouHub香港有限公司​</strong><br/>
      <strong>九龍旺角塘尾道66-68福強工業大廈​A座14樓6A室</strong><br/>
    </p>
    <Link to='/contact' className="inline-block mx-auto lg:mx-0 hover:underline bg-red-500 text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg">
      {intl.formatMessage({ id: 'contact' })}
    </Link>



    <div className="mt-20">
        <p>制定日：2019年5月20日</p>
    </div>
  </>
)

export default PrivacyPolicyHK
