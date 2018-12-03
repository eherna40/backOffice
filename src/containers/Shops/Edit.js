import React, { Component } from 'react'
import Switch from '@material-ui/core/Switch';
import Input from '../../components/Input'
import { connect } from 'react-redux'
import { actionGetAutoComplete, actionGetPlaceById, actionFetchAddShop, ationFetchGetOnlyShop, actionFetchEditShop } from './actions';
import './edit.css'
import AutoComplete from '../../components/AutoComplete';
import BtnNeutral from '../../components/Buttons/btn-neutral';
import Loading from '../../components/Loading';
import Close from '../../components/Forms/Close';
import Notifications from '../../components/Notification';

const searchOptions = {
    componentRestrictions: {
        country: 'es'
    }
}

export class Edit extends Component {
    state = {
        name: '',
        locality: '',
        place_id: '',
        street_number: '',
        route: '',
        postal_code: '',
        country: '',
        administrative_area_level_1: '',
        administrative_area_level_2: '',
        email: '',
        formatted_phone_number: '',
        password: '',
        user: '',
        active: false

    }



    componentDidMount = () => {
        const id = this.props.match.params.id
        this.props.getShop(id)
    }

    componentDidUpdate = (prevProps, prevState) => {


        if (prevProps.selected !== this.props.selected) {
            const {
                name,
                locality,
                place_id, street_number,
                route,
                postal_code, country,
                administrative_area_level_1,
                administrative_area_level_2,
                email,
                formatted_phone_number,
                password,
                user,
                active
            } = this.props.selected
            this.setState({
                name,
                locality,
                place_id, street_number,
                route,
                postal_code, country,
                administrative_area_level_1,
                administrative_area_level_2,
                email,
                formatted_phone_number,
                password,
                user,
                active
            })
        }
    }

    handleBlurCloseAutoComplete = (el) => {
        this.setState({
            autocomplete: false
        })

    }
    handleFocusAutoComplete = () => {
        this.setState({
            autocomplete: true
        })

    }

    handleClickSubmit = () => {
        const place = { ...this.state }
        const {
            name,
            locality,
            place_id, street_number,
            route,
            postal_code, country,
            administrative_area_level_1,
            administrative_area_level_2,
            email,
            formatted_phone_number,
            password,
            user,
            active
        } = this.state
        this.props.editShop(
            {
                name,
                locality,
                place_id, street_number,
                route,
                postal_code, country,
                administrative_area_level_1,
                administrative_area_level_2,
                email,
                formatted_phone_number,
                password,
                user,
                active
            }
        )

    }

    onClickCapture = (el) => {
        let result = false
        el.path.map(i => {
            if (i.id === 'autocomplete') {
                result = true
            }
            return true
        })
        if (!result) {
            this.handleBlurCloseAutoComplete()
        }

    }

    handelClickCapture = (el) => {
    }

    componentWillUnmount = () => {
        this.form.removeEventListener('mousedown', this.onClickCapture)
    }

    handleSelectLocal = (el) => {
        //getPlaceById()
    }


    handleChangeChecked = () => { this.setState({ active: !this.state.active }) }

    handleChangeInput = (el) => {
        this.setState({
            [el.target.name]: el.target.value
        })
    }

    handleClickClose = () => {
        this.props.history.goBack()
    }


    handleChange = name => {
        this.setState({ name });
    };

    handleSelect = address => {
        // geocodeByAddress(address)
        //     .then(results => getLatLng(results[0]))
        //     .then(latLng => console.log('Success', latLng))
        //     .catch(error => console.error('Error', error));
    };

    render() {

        return (


            <div className="add-shop">
                {
                    this.props.sync && <Loading />

                }
                <div className="add-shop-container">
                    <form ref={node => this.form = node} className="add-shop-form">
                        {
                            this.props.error &&
                            <Notifications message='Ha ocurrido un erro al actualizar, intentelo nuevamente' />
                        }
                        {
                            this.props.updated &&  <Notifications successColor={true} message='Actualizado correctamente' />

                        }
                        <div className="add-shop-form-title">
                            {this.state.name}
                            <div className="idshop"><small >{this.state.place_id}</small></div>
                            <Close handleClick={this.handleClickClose} />
                        </div>
                        <div className="input-content-active">
                            <div className="visible-text">{this.state.active ? 'Visible' : 'Oculto'}</div>
                            <Switch checked={this.state.active} onChange={this.handleChangeChecked} />
                        </div>
                        <div className="add-shop-form-container">
                            <div className="add-shop-input-container">
                                <div id="autocomplete" className="input-content-name">

                                    <Input handleChangePlaceAutocomplete={this.handleChange} placeautocomplete={false} handleFocusAutoComplete={this.handleFocusAutoComplete} value={this.state.name} handleChange={this.handleChangeName} label="Nombre" />

                                </div>
                                <div className="input-content-street">
                                    <Input name='route' handleChange={this.handleChangeInput} value={this.state.route} label="Calle" />
                                </div>
                                <div className="input-content-street_number">
                                    <Input name='street_number' handleChange={this.handleChangeInput} value={this.state.street_number} label="Numero" />
                                </div>
                                <div className="input-content-cp">
                                    <Input name='postal_code' handleChange={this.handleChangeInput} value={this.state.postal_code} label="CP" />
                                </div>
                                <div className="input-content-state">
                                    <Input name='administrative_area_level_1' handleChange={this.handleChangeInput} value={this.state.administrative_area_level_1} label="Poblacion" />
                                </div>
                                <div className="input-content-city">
                                    <Input name='locality' handleChange={this.handleChangeInput} value={this.state.locality} label="Provincia" />
                                </div>
                                <div className="input-content-country">
                                    <Input name='country' handleChange={this.handleChangeInput} value={this.state.country} label="País" />
                                </div>
                                <div className="input-content-phone">
                                    <Input name='formatted_phone_number' handleChange={this.handleChangeInput} value={this.state.formatted_phone_number} label="Telefono" />
                                </div>
                                <div className="input-content-email">
                                    <Input name='email' handleChange={this.handleChangeInput} value={this.state.email} label="Email" />
                                </div>

                            </div>
                            <div className="account-shop">
                                <div className="account-shop-container">

                                    <div className="account-shop-title">Cuenta</div>
                                    <Input name="user" handleChange={this.handleChangeInput} value={this.state.user} label='User' />
                                    <Input name="password" handleChange={this.handleChangeInput} value={this.state.password} label='Contraseña' />

                                </div>
                            </div>

                        </div>
                        <div className="btn-submit">
                            <BtnNeutral title="GUARDAR" handleClick={this.handleClickSubmit} />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    selected: state.shopReducer.selected,
    sync: state.shopReducer.sync,
    error: state.shopReducer.error,
    updated: state.shopReducer.updated
});

const mapDispatchToProps = dispatch => ({
    getShop: (id) => dispatch(ationFetchGetOnlyShop(id)),
    editShop: (values) => dispatch(actionFetchEditShop(values))
});

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
