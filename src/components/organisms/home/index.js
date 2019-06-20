import React from "react"
import { Link } from "gatsby-plugin-intl"
import Title from "@components/atoms/title"
import GrowthSVG from "@contents/svg/undraw_growth_analytics_8btt.svg"
import ArrowRightSVG from "@contents/svg/arrow_right.svg"

const Home = ({intl, siteTitle}) => (
  <>
    <div className="bg-white py-10">
      <div className="container mx-auto text-center lg:text-left">
        <div className="flex flex-col lg:items-center lg:flex-row">
          <div className="lg:w-1/2 p-4">
            <h1 className="font-bold mb-2 text-5xl lg:text-6xl">{siteTitle}</h1>
            <p className="text-gray-700 text-lg lg:text-2xl">{intl.formatMessage({ id: 'description' })}</p>
            <Link to='/contact' className="inline-block mx-auto lg:mx-0 hover:underline bg-red-500 text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg">
              {intl.formatMessage({ id: 'contact' })}
            </Link>
          </div>
          <div className="lg:w-1/2 p-4">
            <img src={GrowthSVG} alt="" className="" />
          </div>
        </div>
      </div>
    </div>
    <div>
      <div className="container mx-auto mt-20">
        <Title title="News" subtitle="" />
        <div className="shadow-lg bg-white rounded p-6 px-2 lg:p-6">
          <div className="border-b p-2 flex justify-between items-center">
            <div>
              <p className="mb-2">
                <time className="text-gray-600 text-lg">2019/06/03</time>
              </p>
              <a href="/" className="text-xl">法人登記が完了しました</a>
            </div>
            <div>
              <img src={ArrowRightSVG} alt="Arrow Right" className="h-10 w-10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default Home
