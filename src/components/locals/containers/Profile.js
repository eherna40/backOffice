import React, { Component } from 'react'
import Layout from '../components/layout';
import DB from '../../../utils/firebase/index'
import './profile.css'
import moment from 'moment'


class Profile extends Component {

	state = {
		profile: {}
	}

componentWillMount = () => {
	DB.init()
	const profile = this.getLocal()
	

}

getLocal = async()=> {
	const profile = await DB.getLocal()
	this.setState({
		profile :profile.data()
	})
}

getDate = (seconds) => {
	const date = moment(seconds).format('DD/MM/YY')
	return date
}

	render() {
		console.log(this.state.profile)
		return (
			<Layout>
				<div className="profile-local">
					<div className="profile-content">
						<div className="profile-data">
							<div className="profile-data-name">
								<div>{ this.state.profile.name }</div>
								<small>{this.state.profile.place_id}</small>
							</div>
							
							{
								this.state.profile.administrative_area_level_1 !== '' &&
									<div className="comunity">
										<div className="comunity-title">
											Comunidad
										</div>
										<div className="comunity-desc">
											{ this.state.profile.administrative_area_level_1  }
										</div>
												
									</div>

							}
							<div className="comunity">
										<div className="comunity-title">
											Dirección
										</div>
										<div className="comunity-desc">
											{ this.state.profile.route  } 
											{ this.state.profile.street_number }, 
											{ this.state.profile.locality }, 
											{ this.state.profile.postal_code }
										</div>
												
									</div>
							<div className="comunity">
										<div className="comunity-title">
											Telefono
										</div>
										<div className="comunity-desc">
											{ this.state.profile.formatted_phone_number  } 

										</div>
												
									</div>
							<div className="date-errollment">
										<div className="enrrollmet-title">
											Fecha de Alta
										</div>
										<div className="enrrollmet-desc">
										
											{ 
												this.state.profile.errollment &&
													this.getDate(this.state.profile.errollment.seconds)
												
											} 
										</div>
												
									</div>
        				</div>
						<div className="profile-map">
							mapa
						</div>
					</div>
				</div>
			</Layout>
		)
	}
}

export default Profile
