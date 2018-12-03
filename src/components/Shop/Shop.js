import React from 'react'
import './styles.css'
import BtnNeutral from '../Buttons/btn-neutral';
import { Switch } from '@material-ui/core';
import { secToDate } from '../../lib/date';



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
        <div className="promo">
            <div className="promo-container">
                <div className="promo-items-content">
                    <div className="promo-item-active" style={{ background: status ? '#b9f6ca' : '#ff8a80' }}>
                        <div className="promo-active-text">{ status ? 'VISIBLE ' : 'OCULTO' }</div>
                    </div>
                    <div className="promo-item promo-item-name promo-item-border">
     
                            <div className="promo-item-label">Tienda</div>
                            <div className="promo-item-text-content">
                                <div className="promo-item-text">{ name }</div>
                            </div>
                            <div className="promo-item-label">Dirección</div>
                            <div className="promo-item-text-content">
                                <div className="promo-item-text">{route}, { street_number } { locality }</div>
                            </div>
            
                    </div>
                    <div className="promo-item promo-item-category">
                        <div className="promo-item-label">Creado</div>
                        <div className="promo-item-text">{ secToDate(errollment.seconds) }</div>
                    </div>
                    <div className="promo-item promo-item-button">
                        <Switch checked={ status } onChange={() => handleChangeStatus(id,active)}/>
                    </div>
                    <div className="promo-item promo-item-button">
                        <BtnNeutral handleClick={ () => handleClickSelected(props) } title="Editar" />
                    </div>
                    
                </div>
            </div>

        </div>
    )
}
