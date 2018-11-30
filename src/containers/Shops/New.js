import React, { Component } from 'react'
import { Container, Grid, Button, Divider } from 'semantic-ui-react';
import Title from '../../components/Title';

export class New extends Component {
	render() {
		return (
			<Container >
				<Title title='Nueva Tienda' />
			</Container>
		)
	}
}

export default New
