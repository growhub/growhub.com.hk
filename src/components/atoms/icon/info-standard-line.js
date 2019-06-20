import PropTypes from "prop-types"
import React from "react"

const InfoStandardLineIcon = ({ className }) => {
  return (
    <svg
      className={className}
      version="1.1"
      viewBox="0 0 36 36"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>info-standard-line</title>
      <circle
        className="clr-i-outline clr-i-outline-path-1"
        cx="17.97"
        cy="10.45"
        r="1.4"
      />
      <path
        className="clr-i-outline clr-i-outline-path-2"
        d="M21,25H19V14.1H16a1,1,0,0,0,0,2h1V25H15a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z"
      />
      <path
        className="clr-i-outline clr-i-outline-path-3"
        d="M18,34A16,16,0,1,1,34,18,16,16,0,0,1,18,34ZM18,4A14,14,0,1,0,32,18,14,14,0,0,0,18,4Z"
      />
      <rect x="0" y="0" width="36" height="36" fillOpacity="0"/>
  </svg>
  )
}

InfoStandardLineIcon.propTypes = {
  className: PropTypes.string
}

InfoStandardLineIcon.defaultProps = {
  className: ''
}

export default InfoStandardLineIcon
