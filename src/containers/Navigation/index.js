import React, { Component } from 'react'
import './styles.css'
import { NavLink } from 'react-router-dom'

export class Navigation extends Component {
    render() {
        return (
            <div className="navigation">
                <div className="navigation-container">
                    <ul className='ul-format'>
                        <NavLink to="/dashboard" className="navigation-link" activeClassName="selected">DASHBOARD</NavLink>
                        <NavLink to="/shops" className="navigation-link" activeClassName="selected">TIENDAS</NavLink>
                        <NavLink to="/users" className="navigation-link" activeClassName="selected">USUARIOS</NavLink>
                        <NavLink to="/pages" className="navigation-link" activeClassName="selected">PAGINAS</NavLink>
                        <NavLink to="/promos" className="navigation-link" activeClassName="selected">PROMOS</NavLink>

                    </ul>
                </div>
            </div>
        )
    }
}

export default Navigation
