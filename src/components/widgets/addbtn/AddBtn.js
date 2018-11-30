import React from 'react'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { NavLink } from 'react-router-dom'


const styles = theme => ({
	button: {
		margin: theme.spacing.unit,
		height: 40,
		width: 40
	},

});

function AddBtn(props) {

	return (
		<div className="addBtn">
			<NavLink to={props.routeLink} >
				<Button variant="fab" color="primary" aria-label="Add">
					<AddIcon />
				</Button>
			</NavLink>
		</div>
	)
}


export default AddBtn;
