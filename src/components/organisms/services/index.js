import React from "react"
import Title from "@components/atoms/title"
import ContentSVG from "@contents/svg/undraw_content_vbqo.svg"
import DevelopSVG from "@contents/svg/undraw_laravel_and_vue_59tp.svg"
import TeachingSVG from "@contents/svg/undraw_teaching_f1cm.svg"

const Services = ({intl}) => (
  <>
    <div className="container mx-auto">
      <Title title={intl.formatMessage({ id: 'services' })} subtitle={intl.formatMessage({ id: 'services_subtitle' })} />
    </div>
    <div className="bg-white mt-10 py-10">
      <div className="container mx-auto">
        <div className="flex flex-col lg:items-center lg:flex-row">
          <div className="lg:w-2/5 p-4">
            <img src={DevelopSVG} alt="" />
          </div>
          <div className="lg:w-3/5 p-4">
            <h2 className="font-bold text-3xl lg:text-5xl mb-2">{intl.formatMessage({ id: 'services_web-development' })}</h2>
            <p className="text-lg lg:text-2xl">{intl.formatMessage({ id: 'services_web-development_description' })}</p>
          </div>
        </div>
      </div>
    </div>
    <div className="py-10">
      <div className="container mx-auto">
        <div className="flex flex-col lg:items-center lg:flex-row">
          <div className="lg:w-3/5 p-4">
            <h2 className="font-bold text-3xl lg:text-5xl mb-2">{intl.formatMessage({ id: 'services_media-management' })}</h2>
            <p className="text-lg lg:text-2xl">{intl.formatMessage({ id: 'services_media-management_description' })}</p>
          </div>
          <div className="lg:w-2/5 p-4">
            <img src={ContentSVG} alt="" />
          </div>
        </div>
      </div>
    </div>
    <div className="bg-white mt-10 py-10">
      <div className="container mx-auto">
        <div className="flex flex-col lg:items-center lg:flex-row">
          <div className="lg:w-2/5 p-4">
            <img src={TeachingSVG} alt="" />
          </div>
          <div className="lg:w-3/5 p-4">
            <h2 className="font-bold text-3xl lg:text-5xl mb-2">{intl.formatMessage({ id: 'services_programmer-mentoring' })}</h2>
            <p className="text-lg lg:text-2xl">{intl.formatMessage({ id: 'services_programmer-mentoring_description' })}</p>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default Services
