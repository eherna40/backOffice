import React, { Component } from 'react'
import Toolbar from '../../components/Toolbar';
import './styles.css'
import { connect } from 'react-redux'
import { actionFetchGetUser, actionFetchGetOnlyUser, actionBlockUser } from './actions';
import User from '../../components/User/User';

export class Users extends Component {
state= {
	email : '',
}

	componentDidMount = () => {
		this.props.fetchGetUsers()
	}

	handleClickSelect = (id) => {
		this.props.getOnlyUser(id)
		const ref = 'editing' + id
		const div = document.getElementById(ref)
		const height = div.children[0].clientHeight
		div.style.height= height.toString() + 'px'


	}

	handleClickBlock = (id, active) => {
		this.props.blockUser(id,active)
	}
	render() {
		const { users } = this.props
		return (
			<div className="users">
				<div className="container">
					<div className="users-container">
						<Toolbar title="USUARIOS" />
						<div className="users-list">
							<div className="user-list-container">
								<div className="user-list-header">
									<div className="user-item-one user-item" >AVATAR</div>
									<div className="user-item-two user-item" >EMAIL</div>
									<div className="user-item-three user-item" >REGISTRO</div>
									<div className="user-item-five user-item" >ACTIVO</div>
									<div className="user-item-six">EDITAR</div>

								</div>
								{
									users.length > 0 &&
									users.map(user => <User handleClickBlock = {this.handleClickBlock } handleClickSelect={this.handleClickSelect} key={user.id} {...user} />)
								}

							</div>
						</div>
					</div>

				</div>

			</div>
		)
	}
}

const mapStateToProps = state => ({
	users: state.usersReducer.data,
	selected: state.usersReducer.selected
});

const mapDispatchToProps = dispatch => ({
	fetchGetUsers: () => dispatch(actionFetchGetUser()),
	getOnlyUser: (id) => dispatch(actionFetchGetOnlyUser(id)),
	blockUser: (id,active) => dispatch(actionBlockUser(id,active))
});

export default connect(mapStateToProps, mapDispatchToProps)(Users)
