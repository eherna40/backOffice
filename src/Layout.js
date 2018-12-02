import React, { Component } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom'
import { history } from './store';
import './App.css'
import PrivateRoutes from './routes/PrivateRoutes'
import Login from './containers/Login';
import { connect } from 'react-redux'
import Header from './containers/Header'
import Navigation from './containers/Navigation'

export class Layout extends Component {
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
							{
								!this.props.isLogged &&
								<Route path="/" exact name="Login" component={Login} />
							}
							<PrivateRoutes isLogged={this.props.isLogged} />
						</Switch>
						{/* <Route path='/users/new' component={AddUser} /> */}
						
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
