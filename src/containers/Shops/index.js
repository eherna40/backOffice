import React, { Component } from 'react'
import './styles.css'
import { connect } from 'react-redux'
import Shop from '../../components/Shop';
import { actionFetchGetShops } from './actions';
import Toolbar from '../../components/Toolbar';
import Loading from '../../components/Loading';
import Profile from '../../components/Shop/Profile'

export class Shops extends Component {
	state = {
		selected: null
	}
	componentDidMount = () => {
		this.props.fetchGetShops()
	}

	handleClickSelected = (item) => {
		console.log(item)
		this.setState({
			selected: item
		})
	}
	render() {
		const { data, sync } = this.props.shops
		console.log(this.state.selected)
		return (
			<div className="shops">
				<div className="shops-container">
					<div className="shops-list">

						{
							sync
							&&
							<Loading />
						}
						<div className="shops-list-container">
						<Toolbar title="TIENDAS" />
							{
								data.length > 0 && data.map(item => {
									return <Shop key={item.id} {...item} handleClick={this.handleClickSelected} />

								})
							}
						</div>
						{
								this.state.selected !== null && <Profile item={this.state.selected} />
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
