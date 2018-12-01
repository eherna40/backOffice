import React from 'react'
import BtnNeutral from '../../components/Buttons/btn-neutral'
import './styles.css'
import { secToDate } from '../../lib/date';

export default function Shop(props) {

	const { 
		administrative_area_level_1, 
		administrative_area_level_2, 
		country, 
		errollment,
		formatted_address,
		formatted_phone_number,
		id,
		international_phone_number,
		locality,
		location,
		modify,
		name,
		password,
		place_id,
		postal_code,
		route,
		street_number,
		url,
		user,

	} = props
	return (
		<div className="shop">
			<div className="shop-content">
				<div className="shop-name">
					<div className="shop-name-title">{ name }</div>
				</div>
				<div className="shop-info-content">
					<div className="shop-title-info">
						<span>INFO</span>
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
						<BtnNeutral title="EDITAR" />
					</div>
				</div>
			</div>
		</div>
	)
}
