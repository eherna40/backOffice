import React from 'react'
import { NavLink } from 'react-router-dom'
import Icon from 'react-icons-kit';
import { androidCheckboxBlank } from 'react-icons-kit/ionicons/androidCheckboxBlank'
import {grin2} from 'react-icons-kit/icomoon/grin2'
import {ic_local_dining} from 'react-icons-kit/md/ic_local_dining'
import {shield} from 'react-icons-kit/icomoon/shield'



function NavigationList(props) {
    return (
        <div className="navigation-links-items">
            <NavLink to="/" className="navigation-link" activeClassName="selected">
            <div className="navigation-link-icon">
                    <Icon size={15} icon={shield} />
                </div>

                <div>
                    Inicio
                </div>
            </NavLink>
            <NavLink to="/users" className="navigation-link" activeClassName="selected">
            <div className="navigation-link-icon">
                    <Icon size={15} icon={grin2} />
                </div>

                <div>
                    Usuarios
                </div>
                </NavLink>
            <NavLink to="/locals" className="navigation-link" activeClassName="selected">
            <div className="navigation-link-icon">
                    <Icon size={15} icon={ic_local_dining} />
                </div>

                <div>
                    Bares
                </div>
            </NavLink>
            <NavLink to="/notifications" className="navigation-link" activeClassName="selected">
                <div className="navigation-link-icon">
                    <Icon size={15} icon={androidCheckboxBlank} />
                </div>

                <div>
                    Notificaciones
                </div>
                </NavLink>

        </div>
    )
}

export default NavigationList