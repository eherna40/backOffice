import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {store, persistor} from './store';
import './App.css'
import Layout from './Layout/Layout';
import { PersistGate } from 'redux-persist/integration/react'


class App extends Component {

	render() {
		return (
			<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
					<Layout/>
			</PersistGate>
			</Provider>

		);
	}
}

export default App;
