import React from 'react'
import './styles.css'
import './formPromo.css'
import Title from './Title';
import Input from '../Input';
import Select from '@material-ui/core/Select';
import { Switch, MenuItem } from '@material-ui/core';
import BtnNeutral from '../Buttons/btn-neutral';
import Close from './Close';
export default function FormPromo(props) {
	const { 
		title,
		price,
		handleClickSave,
		handleChangeText,
		localSelected,
		categorySelected,
		categories,
		locals,
		active,
		handleClickClose,
		handleChageActive
	 } = props
	return (
		<div className="form-promo">
			<div className="form-container">
				<Close handleClick = {handleClickClose} />
				<Title title="Nueva Oferta"></Title>
				<div className="form-promo-container">
					<Switch checked={active} onChange={ handleChageActive} />
					<Input name="title" label="Titulo"  value={title} handleChange={handleChangeText}/>
					<div className="form-promo-price">
						<Input name="price" type="number" label="Precio" value={price} handleChange={handleChangeText} />
					</div>
					<div className="form-select">
					<Select
                                className="select-material-ui"
                                // open={this.state.open}
                                // onClose={this.handleClose}
                                //onOpen='prueba'
                                value='all'
                            // onChange={this.handleChange}
                            >
                                <MenuItem value='all'>Todos</MenuItem>
                            </Select>
					</div>
					<div className="form-select">
					<Select
                                className="select-material-ui"
                                // open={this.state.open}
                                // onClose={this.handleClose}
                                //onOpen='prueba'
                                value='all'
                            // onChange={this.handleChange}
                            >
                                <MenuItem value='all'>Todos</MenuItem>
                            </Select>
					</div>
					<BtnNeutral handleClick={handleClickSave} title="GUARDAR" />
				</div>
			</div>
		</div>
	)
}
