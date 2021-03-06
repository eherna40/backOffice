import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'

function Toolbar(props) {
  return (
    <div className="toolbar">
      <div className="toolbar-container">
        <div className="tootlbar-name-add">
          <div className="toolbar-title">{props.title}</div>
          {
            props.link &&
            <Link to={props.link} className="navigation-add">NUEVO</Link>
          }
        </div>
      </div>
    </div>
  )
}

export default Toolbar
