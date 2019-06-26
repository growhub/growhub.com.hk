import React from "react"
import Image from "@components/atoms/image";
import Title from "@components/atoms/title"

const MadeWith = ({intl}) => (
  <>
    <div className="container mx-auto">
      <Title title="Made with" subtitle={intl.formatMessage({ id: 'made-with_subtitle' })} />
    </div>
    <div className="bg-white mt-10 py-10">
      <div className="container mx-auto">

        <div className="my-4 p-4">
          <div className="mb-4">
            <h2 className="flex items-center text-3xl font-bold mb-5">
              <div
                className="mr-4"
                style={{ width: `40px` }}
              >
                <Image filename="gatsby-icon.png" alt="GatsbyJS"　/>
              </div>
              <a
                href="https://www.gatsbyjs.org/"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                GasbyJS
              </a>
            </h2>
            <div
                className="w-full mb-10"
              >
                <Image filename="gatsby-screenshot.png" alt="GatsbyJS"　/>
            </div>
          </div>
          <div className="mb-4">
            <h2 className="flex items-center text-3xl font-bold mb-5">
              <div
                className="mr-4"
                style={{ width: `40px` }}
              >
                <Image filename="tailwind-icon.png" alt="TailwindCSS"　/>
              </div>
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                TailwindCSS
              </a>
            </h2>
            <div
                className="w-full mb-10"
              >
                <Image filename="tailwind-screenshot.png" alt="TailwindCSS"　/>
            </div>
          </div>
          <div className="mb-4">
            <h2 className="flex items-center text-3xl font-bold mb-5">
              <div
                className="mr-4"
                style={{ width: `40px` }}
              >
                <Image filename="netlify-icon.png" alt="Netlify"　/>
              </div>
              <a
                href="https://www.netlify.com/"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                Netlify
              </a>
            </h2>
            <div
                className="w-full mb-10"
              >
                <Image filename="netlify-screenshot.png" alt="Netlify"　/>
            </div>
          </div>
        </div>

      </div>
    </div>
  </>
)

export default MadeWith
