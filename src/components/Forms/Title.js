import React from 'react'
import './styles.css'

export default function Title(props) {
  return (
    <div className="form-title">
      <div className="form-title-text">{ props.title }</div>
    </div>
  )
}
