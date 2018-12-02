import React from 'react'
import './styles.css'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import BtnNeutral from '../Buttons/btn-neutral';



export default function Filter(props) {
    return (
        <div className="filter">
            <div className="filter-container">
                <div className="filter-title">FILTROS</div>
                <div className="filter-items">
                    <div className="filter-item">
                        <div className="filter-item-label">Buscar por titulo</div>
                        <div className="filter-item-input-text">
                            <input name="sName" />
                        </div>
                    </div>
                    <div className="filter-item">
                        <div className="filter-item-label">Buscar por Tienda</div>
                        <div className="filter-item-input-text">
                            <input name="sTienda" />
                        </div>
                    </div>
                    <div className="filter-item">
                        <div className="filter-item-label">Buscar por Categoria</div>
                        <div className="filter-item-input-select">
                            <Select
                                className="select-material-ui"
                                // open={this.state.open}
                                // onClose={this.handleClose}
                                onOpen='prueba'
                            // value={this.state.age}
                            // onChange={this.handleChange}
                            // inputProps={{
                            //   name: 'age',
                            //   id: 'demo-controlled-open-select',
                            // }}
                            >
                                <MenuItem value='all'>Ten</MenuItem>
                            </Select>
                        </div>
                    </div>
                    <div className="filter-item">
                        <div className="filter-item-label">Activo/Inactivo</div>
                        <div className="filter-item-input-select">
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
                    </div>
                    <div className="filter-item">
                        <BtnNeutral title="FILTRAR" />
                    </div>
                </div>
            </div>

        </div>
    )
}
