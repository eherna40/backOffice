import React, { Component } from 'react';



import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom'
import store, { history } from './store';

import Navigation from './components/navigation/containers/navigation';
import './App.css'
import Header from './components/Header/Header'
import routes from './routes/index'
import AddShop from './containers/Shops/Add'

class App extends Component {

	state = {
		isLogin: true
	}


	openRoute = () =>{
		alert()
	}

	render() {
		return (

			<Provider store={store}>
        <ConnectedRouter history={history}>
					<div className="App">
						<Header />
						<Navigation />
						<div className="content">
							<Switch>
								{
									routes.map((route, index) => {
										return (
										<Route
											key={index}
											path={route.path}
											exact={route.exact}
											component={route.component}
										/>
									)}) 
								}
								
							</Switch>
								{/* <Route path='/users/new' component={AddUser} /> */}
								<Route path='/shop/new' component={AddShop} /> 
						</div>

					</div>
					</ConnectedRouter>
				</Provider>

		);
	}
}

export default App;
