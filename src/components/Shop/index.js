import React from 'react'
import BtnNeutral from '../../components/Buttons/btn-neutral'
import './styles.css'
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
		handleClick

	} = props
	console.log(errollment)
	return (
		<div className="shop">
			<div className="shop-content">
				<div className="shop-name">
					<div className="shop-name-title">
					<img src={icon} width='20' alt=''/>{ name }</div>
				</div>
				<div className="shop-info-content">
					<div className="shop-title-info">
						<span>{ active ? 'VISIBLE' : 'OCULTO' }</span>
					</div>
					<div className="shop-fav shop-content-block">
						<div className="shop-content-title">
							Favoritos
          </div>
						<div className="shop-fav-number">20</div>
					</div>
					<div className="shop-fav shop-content-block">
						<div className="shop-block-border">
							<div className="shop-content-title">
								Creado
          </div>
							<div className="shop-text-subtitle">{ secToDate(errollment.seconds) }</div>
						</div>
					</div>
					<div className="shop-address shop-content-block">
						<div className="shop-block-border">
							<div className="shop-content-title">
								Dirección
          </div>
							<div className="shop-address-street">{route }, {street_number}</div>
							<div className="shop-address-country">{ locality }, { country }</div>
						</div>
					</div>
					<div className="shop-button-editar shop-content-block">
						<BtnNeutral handleClick={() => handleClick(props)} title="EDITAR" />
					</div>
				</div>
			</div>
		</div>
	)
}
