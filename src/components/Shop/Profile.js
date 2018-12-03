import React from 'react'
import './profile.css'
import Switch from '@material-ui/core/Switch';
import { secToDate } from '../../lib/date';
import BtnNeutral from '../Buttons/btn-neutral';


export default function Profile(props) {
console.log(props,'sads')
	const { 
		place_id,errollment, 
		formatted_address, 
		name, 
		active, 
		modify, 
		website, 
		formatted_phone_number, 
		user, 
		password 
	} = props.item


	return (
		<div className="profile">
			<div className="profile-container">
				<div className="profile-title">
					<div><span>{name}</span></div>
					<small className="profile-place_id">{place_id}</small>
				</div>
				
				<div className="profile-visible">
				<div className="profile-label">{ active ? 'VISIBLE' : 'OCULTO'}</div>
				<Switch checked={active} />
				</div>
				<div className="profile-account">
				<div className="profile-info-content">
					<div className="profile-label">User</div>
					<div className="profile-address profile-info">{user}</div>
				</div>
				<div className="profile-info-content">
					<div className="profile-label">Contraseña</div>
					<div className="profile-address profile-info">{password}</div>
				</div>
				</div>
				<div className="profile-info-content">
					<div className="profile-label">Dirección</div>
					<div className="profile-address profile-info">{formatted_address}</div>
				</div>
				<div className="profile-info-content">
					<div className="profile-label">Creado</div>
					<div className="profile-address profile-info">{secToDate(errollment.seconds)}</div>
				</div>
				<div className="profile-info-content">
					<div className="profile-label">Modificado</div>
					<div className="profile-address profile-info">{secToDate(modify.seconds)}</div>
				</div>
				<div className="profile-info-content">
					<div className="profile-label">Web</div>
					<div className="profile-address profile-info">{website}</div>
				</div>
				<div className="profile-info-content">
					<div className="profile-label">Telefono</div>
					<div className="profile-address profile-info">{formatted_phone_number}</div>
				</div>
				<div className="profile-button-container">
					<BtnNeutral title="EDITAR"/>
					<BtnNeutral title="ELIMINAR" />
				</div>
			</div>
		</div>
	)
}
