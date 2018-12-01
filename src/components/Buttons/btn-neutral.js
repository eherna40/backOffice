import React from 'react'
import './styles.css'

function BtnNeutral(props) {
  const { title } = props
  return (
    <div onClick={props.handleClick} className="button-neutral">
      <div className="title-button">
        {title}
      </div>
    </div>
  )
}

export default BtnNeutral

