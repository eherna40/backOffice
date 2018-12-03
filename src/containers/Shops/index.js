import React, { Component } from 'react'
import './styles.css'
import { connect } from 'react-redux'
import Shop from '../../components/Shop/Shop';
import { actionFetchGetShops, actionBlockShop } from './actions';
import Toolbar from '../../components/Toolbar';
import Loading from '../../components/Loading';
import Profile from '../../components/Shop/Profile'
import Filter from '../../components/Filter/Filter';
import Notification from '../../components/Notification'


export class Shops extends Component {
	state = {
		selected: null,
		status: null
	}

	handleChangeStatus = (id, active) => {
        const values = { id, active }
        this.props.blockShop(values)
	}
	

	componentDidMount = () => {
		this.props.fetchGetShops()
	}

	handleClickSelected = (item) => {
		this.setState({
			selected: item
		})
	}
	render() {

		const { data, sync } = this.props.shops
		return (
			<div className="shops">
				<div className="shops-container">
					<Toolbar link='/shop/add' title="TIENDAS" />
					<div className="shops-wrapper">
						{
							this.state.selected && <Profile item={this.state.selected}/>
						}
						<div className="shops-filter">
							{/* <Filter /> */}

						</div>
						<div className="shops-list">
						{ this.props.error && <Notification /> }
						{ sync && <Loading /> }
							{
								data.length > 0 && data.map(item => {
									return <Shop 
									key={item.id} 
									{...item} 
									id={item.id} 
									handleClickSelected={this.handleClickSelected}
									handleChangeStatus={ this.handleChangeStatus }
									/>

								})
							}

						</div>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	user: state.loginReducer.user,
	shops: state.shopReducer,
	error: state.shopReducer.error
});

const mapDispatchToProps = dispatch => ({
	fetchGetShops: (values) => dispatch(actionFetchGetShops(values)),
	blockShop: (values) => dispatch(actionBlockShop(values))
});

export default connect(mapStateToProps, mapDispatchToProps)(Shops)
