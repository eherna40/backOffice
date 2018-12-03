import React from 'react'
import './styles.css'
import BtnNeutral from '../Buttons/btn-neutral';
import { Switch } from '@material-ui/core';
import { secToDate } from '../../lib/date';
import { NavLink } from 'react-router-dom'
import './shop.css'


export default function Shop(props) {
	const { 
		country, 
		errollment,
		locality,
		name,
		route,
		street_number,
		active,
        icon,
        id,
        handleClickSelected,
        handleChangeStatus

	} = props
    let status = active
    return (
        <div className="shop">
            <div className="shop-container">
                <div className="shop-items-content">
                    <div className="shop-item-active" style={{ background: status ? '#b9f6ca' : '#ff8a80' }}>
                        <div className="shop-active-text">{ status ? 'VISIBLE ' : 'OCULTO' }</div>
                    </div>
                    <div className="shop-item shop-item-name shop-item-border">
     
                            <div className="shop-item-label">Tienda</div>
                            <div className="shop-item-text-content">
                                <div className="shop-item-text">{ name }</div>
                            </div>
                            <div className="shop-item-label">Dirección</div>
                            <div className="shop-item-text-content">
                                <div className="shop-item-text">{route}, { street_number } { locality }</div>
                            </div>
            
                    </div>
                    <div className="shop-item shop-item-category">
                        <div className="shop-item-label">Creado</div>
                        <div className="shop-item-text">{ secToDate(errollment.seconds) }</div>
                    </div>
                    <div className="shop-item shop-item-button">
                        <Switch checked={ status } onChange={() => handleChangeStatus(id,active)}/>
                    </div>
                    <div className="shop-item shop-item-button">
                        {/* <BtnNeutral handleClick={ () => handleClickSelected(props) } title="Editar" /> */}
                        <NavLink className='editLink' to={`/shops/edit/${id}`} onClick= {() => handleClickSelected(props) } >EDITAR</NavLink>
                    </div>
                    
                </div>
            </div>

        </div>
    )
}
