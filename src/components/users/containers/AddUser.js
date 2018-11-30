import React, { Component } from 'react'
import Layout from '../components/layout';
import './adduser.css'
import DB from '../../../utils/firebase/index'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import Switch from '@material-ui/core/Switch';



import generator from 'generate-password'
import serialize from '../../../utils/serialize'




class AddUser extends Component {


	state = {
		router: null,
		password: '',
		switch: true
	}

	static contextTypes = {
		router: () => true, // replace with PropTypes.object if you use them
	}

	componentDidMount = () =>{

		const date = new Date()
		var password = generator.generate({
			length: 10,
			numbers: true
		});
		this.setState({
			password
		})
	}

	handleClose = () => {
		this.context.router.history.goBack()
	}

	handleSwitch = () => {
		this.setState({
			switch: !this.state.switch
		})
	}

	handleSubmitForm = (el) =>{
		el.preventDefault()
		const {result, data} = serialize(el)

		if (result === 'success'){
			DB.addUser(data)

		}else{
			document.querySelector('.form-control-error p').style.display= 'block'
		}
	
	}


	render() {
		return (
			<Layout>

				<div className="adduser d-flex align-items-center justify-content-center">
					<div className="adduser-content">
						<div className="icon-close" onClick={ this.handleClose }>
							<CloseIcon />
						</div>
						<div className="adduser-title">Nuevo Usuario</div>
						<form onSubmit={this.handleSubmitForm}>
							<Grid xs={12} item container spacing={16} className="card-body">
								<Grid item xs={12} className="input-content d-flex flex-direction-column">
								<label>{this.state.switch ? 'Activo' : 'Bloqueado'}</label>

								<Switch
                            checked={this.state.switch}
							onChange={this.handleSwitch}
							name="active"
							value="checkbox"
                            color="primary"

                        />
								</Grid>
								<Grid item xs={12} className="input-content d-flex flex-direction-column">
									<label>Nombre</label>
									<input name="name" type="text" className="form-control" placeholder="Nombre" />
								</Grid>
								<Grid item xs={8} className="input-content d-flex flex-direction-column">
									<label>Dirección</label>
									<input name="address" type="text" className="form-control" placeholder="Direccion" />
								</Grid>
								<Grid item xs={4} className="input-content d-flex flex-direction-column">
									<label>CP</label>
									<input name="cp" type="text" className="form-control" placeholder="Direccion" />
								</Grid>
								<Grid item xs={6} className="input-content d-flex flex-direction-column" >
									<label>Población</label>
									<input name="city" type="text" className="form-control" placeholder="Población" />
								</Grid>
								<Grid item xs={6} className="input-content d-flex flex-direction-column">
									<label>Provincia</label>
									<input name="state" type="text" className="form-control" placeholder="Provincia" />
								</Grid>
								<Grid item xs={12} className="input-content d-flex flex-direction-column">
									<label>Email</label>
									<input name="email" type="text" className="form-control" placeholder="Email" />
								</Grid>
								<Grid item xs={12} className="input-content d-flex flex-direction-column">
									<label>Confirmaciòn email</label>
									<input name="confirm_email" type="text" className="form-control" placeholder="Confirmación email" />
								</Grid>
								<Grid item xs={12} className="input-content d-flex flex-direction-column">
									<label>Contraseña</label>
									<input name="pass" disabled type="text" className="form-control" placeholder="Email" value={this.state.password} />
								</Grid>
								<Grid item xs={12} className="form-control-error">
									<p>Todos los campos son obligatiorios</p>
								</Grid>
								<Grid item xs={12} className="input-content d-flex justify-content-space-between">
								<Button variant="outlined" type="submit" className="user-button-normal" size="small" >GUARDAR</Button>

								</Grid>

							</Grid>
						</form>

					</div>
				</div>

			</Layout>
		)
	}
}

export default AddUser
