import React from 'react'
import './styles.css'
import BtnNeutral from '../Buttons/btn-neutral';
import { Link } from 'react-router-dom'

function Toolbar(props) {
  return (
    <div className="toolbar">
        <div className="toolbar-container">
        <div className="tootlbar-name-add">
        <div className="toolbar-title">TIENDAS</div>
        <Link to="/shops/add" className="navigation-add" activeClassName="selected">NUEVO</Link>
        </div>  
        </div>
    </div>
  )
}

export default Toolbar
