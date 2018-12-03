import React from 'react'

export default function Close(props) {
  return (
    <div className="form-close">
        <div onClick={props.handleClick} className="form-close-container">
            <span >X</span>
        </div>
    </div>
  )
}
