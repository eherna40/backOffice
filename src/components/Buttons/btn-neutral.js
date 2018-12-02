import React from 'react'
import './styles.css'

function BtnNeutral(props) {
  const { title , style} = props
  return (
    <div onClick={props.handleClick} className="button-neutral" style={style }>
      <div className="title-button">
        {title}
      </div>
    </div>
  )
}

export default BtnNeutral

