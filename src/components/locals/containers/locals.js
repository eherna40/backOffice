import React, { Component } from 'react'
import Layout from '../components/layout';
import DB from '../../../utils/firebase'
import './locals.css'
import HeaderToolbar from '../../widgets/headerToolbar/HeaderToolbar';
import LocalsList from '../components/LocalsList';

export class Locals extends Component {

state = {
	locals: []
}

	componentWillMount = () => {
		DB.init()
		this.getLocals()
		
	}


	getLocals = async() => {
		const locals = await DB.getLocals().then( res => res)
		this.setState({
			locals
		})
		
	}
	render() {
		this.state.locals.length > 0 && console.log(this.state.locals[0].data())
		return (
			<Layout>
				<div className="Locals">
					<HeaderToolbar routeLink = '/locals/new' />
					<LocalsList />
				</div>
        	</Layout>
		)
	}
}

export default Locals
