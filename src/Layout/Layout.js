import React, { Component } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch , Redirect} from 'react-router-dom'
import { history } from '../store';
import '../App.css'
import PrivateRoutes from '../routes/PrivateRoutes'
import Login from '../containers/Login';
import { connect } from 'react-redux'
import Header from '../containers/Header'
import Navigation from '../containers/Navigation'

export class Layout extends Component {

	componentDidMount = () => {
		if(this.props.isLogged === false){
		history.replace('/')
		}else{
			history.push('/dashboard')
		}
		
	}
	componentDidUpdate = ( ) => {
		if(this.props.isLogged){
			history.push('/dashboard')

		}
	}
	render() {
		return (
			<ConnectedRouter history={history}>
				<div className="App">
					{
						this.props.isLogged &&
						<div>
							<Header />
							<Navigation />
						</div>

					}
					<div className="container">
						<Switch>
							<Route path="/" exact name="Login" component={Login} />
							{ this.props.isLogged &&<PrivateRoutes isLogged={this.props.isLogged} />}
						</Switch>
					</div>

				</div>
			</ConnectedRouter>
		)
	}
}

const mapStateToProps = state => ({
	isLogged: state.loginReducer.isLogged
});


export default connect(mapStateToProps, null)(Layout)
