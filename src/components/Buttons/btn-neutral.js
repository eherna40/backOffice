import React from 'react'
import './styles.css'

function BtnNeutral(props) {
  const { title } = props
  return (
    <div onClick={props.handleClick} className="button-neutral">
      <span className="title-button">
        {title}
      </span>
    </div>
  )
}

export default BtnNeutral

