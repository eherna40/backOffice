import React, { Component } from 'react'
import './styles.css'
import { connect } from 'react-redux'
import Shop from '../../components/Shop';
import { actionFetchGetShops } from './actions';
import Toolbar from '../../components/Toolbar';

export class Shops extends Component {

	componentDidMount = () => {
		this.props.fetchGetShops()
	}
	render() {
		const { data } = this.props.shops
		console.log(data, 'as')
		return (
			<div className="shops">
				<div className="shops-container">
				<Toolbar  />
					<div className="shops-list">
						{
							data.length > 0 && data.map(item => {
								return <Shop key={item.id} {...item} />

							})
						}
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	user: state.loginReducer.user,
	shops: state.shopReducer
});

const mapDispatchToProps = dispatch => ({
	fetchGetShops: (values) => dispatch(actionFetchGetShops(values)),

});

export default connect(mapStateToProps, mapDispatchToProps)(Shops)
