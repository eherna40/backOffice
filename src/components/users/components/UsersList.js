import React from 'react'
import User from './User';
import Grid from '@material-ui/core/Grid';
import AddBtn from '../../widgets/addbtn/AddBtn';
import Input from '../../widgets/input/Input';
import Select from '../../widgets/select/SelectOrder';



function UsersList(props) {
	return (
		<div className="userList">
			<Grid xs={12} item>
				<Grid container spacing={40} className="user-toolbar align-items-center">
					<Grid item xs={2} className="select-order">
						<Select />
					</Grid>
					<Grid item xs={5} className="user-toolbar-search">
						<Input />
					</Grid>
					<Grid xs={5} item className="user-toolbar-add text-align-right">
						<AddBtn />
					</Grid>
				</Grid>
			</Grid>
			<div className="userList-content ">
				<Grid md={12} item>
					{
						props.users.map( user => 
							<User handleDeleteUser = {props.handleDeleteUser} handleSubmit={props.handleSubmit} key={user.id} user = { user } open={props.open} anchorEl={props.anchorEl} handleClick={props.handleClick} handleClose={props.handleClose} switch={props.switch} handleSwitch={props.handleSwitch} />
						)
					}
				</Grid>
			</div>
		</div>
	)
}

export default UsersList
