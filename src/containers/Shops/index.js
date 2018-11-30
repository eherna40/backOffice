import React, { Component } from 'react'
import './styles.css'
import HeaderToolbar from '../../components/widgets/headerToolbar/HeaderToolbar';
import LocalsList from '../../components/locals/components/LocalsList';

export class Shops extends Component {

state = {
	shops: []
}

	render() {
		return (
				<div className="Locals">
					<HeaderToolbar routeLink = '/locals/new' />
					<LocalsList />
				</div>
		)
	}
}

export default Shops
