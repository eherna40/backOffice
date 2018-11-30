import React, { Component } from 'react'
import Layout from '../components/layout';
import './users.css'
import UsersHeader from '../components/UsersHeader';
import UsersList from '../components/UsersList';
import DB from '../../../utils/firebase/'

export class Users extends Component {

	state = {
		users: [],
		switch: null,
		openMenu: false,
		user: '',
		pass: '',
		email: '',
		address: '',
		cp: '',
		state: '',
		city: '',
		active: ''


	}

	componentWillMount = () =>{
		DB.init()
		this.getUsers()
	}

	getUsers = async()=> {
		const users = await DB.getUsers()
		this.setState({
			users
		})
	}

	closeMenu = () =>{
		this.setState({ anchorEl: null,openMenu: false });	
	}

	activeUser = ( active, id ) =>{
		console.log(this.state.switch)
		this.setState({
			switch: !active
		})
		this.activeUserDB(active , id)
	}


	activeUserDB = async(active, id) => {
		const res = await DB.blockUser(active, id).then(res => res)
		if(!res){
			alert()
			this.setState({
				switch: active
			})
		}else{
			this.getUsers()
		}
	}


	handleSubmitForm = (el) =>{
		el.preventDefault()
		let data = new Object()
		const id = el.target.id
		for ( var i = 0 ; i < el.target.elements.length ; i++ ){
			console.log(el.target.elements[i].type)
			if(el.target.elements[i].type === 'text'){
				data[el.target.elements[i].name] = el.target.elements[i].value
			}

		}

		console.log(data)
	
	}


	handleDeleteUser = async(id) => {
			const res = await DB.deleteUser(id)
			console.log(res)
}



	openMenu = (e, id) => {
		const element = document.getElementById(id)
		element.style.height= this.state.openMenu ? '50px' : 'auto'
		this.setState({ openMenu: !this.state.openMenu })
	}

	render() {
		return (
			<Layout>
				<UsersHeader />
				<UsersList handleDeleteUser = { this.handleDeleteUser } handleSubmit={this.handleSubmitForm} users={this.state.users} open={this.state.openMenu}  handleClick={this.openMenu} handleClose={this.closeMenu} switch={this.state.switch} handleSwitch={this.activeUser} />
			</Layout>
		)
	}
}

export default Users
