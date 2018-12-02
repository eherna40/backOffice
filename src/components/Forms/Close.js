import React from 'react'

export default function Close(props) {
  return (
    <div className="form-close">
        <div className="form-close-container">
            <span onClick={props.handleClick}>X</span>
        </div>
    </div>
  )
}
