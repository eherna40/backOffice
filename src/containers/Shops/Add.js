import React, { Component } from 'react'
import './styles.css'
import Switch from '@material-ui/core/Switch';
import Input from '../../components/Input'
import { connect } from 'react-redux'
import { firebaseApp as firebase } from '../../lib/firebase/config'
import { actionGetAutoComplete, actionGetPlaceById, actionFetchAddShop } from './actions';
import './styles.css'
import AutoComplete from '../../components/AutoComplete';
import { getPlaceById } from '../../lib/firebase';
import BtnNeutral from '../../components/Buttons/btn-neutral';
import Loading from '../../components/Loading';
import FormAddShop from '../../components/Forms/FormAddShop';
import Close from '../../components/Forms/Close';

import PlacesAutocomplete, {
    geocodeByPlaceId,
    getLatLng,
    geocodeByAddress
} from 'react-places-autocomplete';


const searchOptions = {
    componentRestrictions: {
        country: 'es'
    }
  }

export class Add extends Component {
    state = {
        nameSelected: '',
        address: '',
        autocomplete: false,
        name: '',
        postal_code: '',
        locality: '',
        administrative_area_level_2: '',
        administrative_area_level_1: '',
        geometry: {},
        predictions: [],
        formatted_address: '',
        website: '',
        place_id: '',
        formatted_phone_number: '',
        country: '',
        route: '',
        token: '',
        icon: '',
        email: '',
        user: '',
        password: '',
        active: true,
        street_number: ''

    }



    componentDidMount = () => {

        // firebase.auth().signInAnonymously()
        //     .then(res => res.user.toJSON())
        //     .then(res => {
        //         this.setState({
        //             token: res.stsTokenManager.accessToken
        //         })
        //     })
        //     .catch(function (error) {
        //         console.log(error)
        //         // Handle Errors here.
        //         // var errorCode = error.code;
        //         // var errorMessage = error.message;
        //         // ...
        //     });

        this.form.addEventListener('mousedown', this.onClickCapture)
    }

    handleChangeName = (el) => {

        this.setState({
            name: el.target.value
        }, () => {
            this.props.getPredictions(this.state.name, this.state.token)
        }
        )

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
        const place = {

            user: this.state.user,
            password: this.state.password,
            email: this.state.email,
            route: this.state.route,
            country: this.state.country,
            locality: this.state.locality,
            administrative_area_level_1: this.state.administrative_area_level_1,
            active: this.state.active,
            administrative_area_level_2: this.state.administrative_area_level_2,
            geometry: this.state.geometry,
            icon: this.state.icon,
            website: this.state.website,
            formatted_address: this.state.formatted_address,
            formatted_phone_number: this.state.formatted_phone_number,
            place_id: this.state.place_id,
            postal_code: this.state.postal_code,
            name: this.state.name,
            street_number: this.state.street_number

        }
        this.props.saveShop(place)

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
        console.log(el)
        //getPlaceById()
    }

    handleSelectClick = async (item) => {
        console.log(item)
        const { placeId } = item
        const name = item.formattedSuggestion.mainText
        this.setState({
            selected: true
        })

        const place = await geocodeByPlaceId(placeId)
        .then(results => { 
            
            return results[0]
        
        })
        .catch(error => console.error(error));
        // const place = await getPlaceById(id)
        const {
            formatted_address,
            formatted_phone_number,
            //geometry,
            icon,
            place_id,
            website,
            address_components,
        } = place


        address_components.map(item => {
            this.setState({
                [item.types[0]]: item.long_name
            })
            return true
        })
        this.setState({
            name: name,
            autocomplete: false,
            place_id,
            //geometry,
            formatted_address: formatted_address ? formatted_address : '',
            formatted_phone_number: formatted_phone_number ? formatted_phone_number : '',
            icon: icon ? icon : '',
            website: website ? website : ''

        })

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
       console.log(this.state.nameSelected)
            this.setState({ name: name ,
                autocomplete: true
            });
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
                        <div className="add-shop-form-title">
                            Nueva tienda
                            <Close handleClick={this.handleClickClose} />
                        </div>
                        <div className="input-content-active">
                            <div className="visible-text">{this.state.active ? 'Visible' : 'Oculto'}</div>
                            <Switch checked={this.state.active} onChange={this.handleChangeChecked} />
                        </div>
                        <div className="add-shop-form-container">
                            <div className="add-shop-input-container">
                                <div id="autocomplete" className="input-content-name">
                                    <PlacesAutocomplete
                                        value={this.state.name !== undefined ? this.state.name : this.state.nameSelected }
                                        onChange={this.handleChange}
                                        onSelect={() => this.handleSelect}
                                        searchOptions={searchOptions}
                                    >
                                        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => {
                                            
                                            return (
                                                <div>
                                                    <Input getInputProps={getInputProps} handleChangePlaceAutocomplete={this.handleChange} placeautocomplete={true} handleFocusAutoComplete={this.handleFocusAutoComplete} value={this.state.name} handleChange={this.handleChangeName} label="Nombre" />
                                                   {
                                                       suggestions.length > 0 && <AutoComplete getSuggestionItemProps={getSuggestionItemProps} id='autocomplete' handleSelectClick={this.handleSelectClick} visible={this.state.autocomplete} predictions={suggestions} />
                                                       
                                                } 

                                                </div>

                                        )}}
                                        
                                        </PlacesAutocomplete>
                                    {/* {
                                        predictions.length > 0 && <AutoComplete id='autocomplete' handleSelectClick={this.handleSelectClick} visible={this.state.autocomplete} predictions={predictions} />

                                    } */}
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

                                    <div className="account-shop-title">Crear cuenta</div>
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
    predictions: state.shopReducer.predictions,
    sync: state.shopReducer.sync
});

const mapDispatchToProps = dispatch => ({
    getPredictions: (value, token) => dispatch(actionGetAutoComplete(value, token)),
    getPlaceById: (id) => dispatch(actionGetPlaceById(id)),
    saveShop: (place) => dispatch(actionFetchAddShop(place))
});

export default connect(mapStateToProps, mapDispatchToProps)(Add);
