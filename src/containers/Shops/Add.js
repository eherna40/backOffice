import React, { Component } from 'react'
import './styles.css'
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import Switch from '@material-ui/core/Switch';

import Grid from '@material-ui/core/Grid';
import Input from '../../components/widgets/input/Input';
import { KEY_GOOGLE_MAPS } from '../../lib/constant';

import { connect } from 'react-redux'

import { firebaseApp as firebase } from '../../lib/firebase/config'
import { actionGetAutoComplete, actionGetPlaceByIdSuccess, actionGetPlaceById } from './actions';

export class Add extends Component {
    state = {
        active: true,
        name: '',
        postal_code: '',
        locality: '',
        administrative_area_level_2: '',
        administrative_area_level_1: '',
        location: {
            lat: null,
            long: null
        },
        predictions: [],
        international_phone_number: '',
        formatted_address: '',
        website: '',
        url: '',
        place_id: '',
        formatted_phone_number: '',
        country: '',
        route: '',
        token: ''

    }
    
    componentDidMount = () => {

        firebase.auth().signInAnonymously()
            .then(res => res.user.toJSON())
            .then(res => {
                this.setState({
                    token: res.stsTokenManager.accessToken
                })
            })
            .catch(function (error) {
                console.log(error)
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
            });

    }

    handleChangeName = (text) => {
        this.setState({
            name: text
        }, () => { 
            this.props.getPredictions(this.state.name, this.state.token)
        }
        )

    }

    handleSelectLocal = (el) => {
        const id = el.target.id
        this.props.getPlaceById(id)
    }

    render() {
        const {predictions} = this.props
        return (
            <div className="addlocal d-flex align-items-center justify-content-center">

                <div className="addlocal-content">
                    <div className="close-icon-content">
                        <CloseIcon className="close-icon" />

                    </div>
                    <div className="addlocal-title">Añadir local</div>
                    <form className="addlocal-form" id="form-addlocal">
                        <Grid xs={12} item spacing={40} container>
                            <Grid xs={12} item className="addlocal-switch" >
                                <div>{this.props.switch === true ? 'Visible' : 'Oculto'}</div>
                                <Switch
                                    checked={this.state.switch}
                                    onChange={this.handleSwitch}
                                    name="active"
                                    value="checkbox"
                                    color="primary"

                                />
                            </Grid>

                            <Grid item xs={12} id="autocomplete-container" className="input-autocomplete">
                                <Input
                                    onChange={this.handleChangeName}
                                    type='text'
                                    value={this.state.name}
                                    label='Nombre'

                                />


                                {
                                    predictions.length > 0 &&

                                    <div className="autocomplete-content" id="autocomplete">
                                        <div className="close-icon-content">
                                            <CloseIcon className="close-icon" />
                                        </div>

                                        {

                                            predictions.map((item, index) =>
                                                <div id={item.place_id} onClick={this.handleSelectLocal} className="autocomplete-item" key={index}>{item.description}</div>
                                            )
                                        }
                                    </div>

                                }
                            </Grid>
                            <Grid item xs={8}>
                                <Input value={this.state.route} onChange={this.handleChangeRoute} label="Direccion" />
                            </Grid>
                            <Grid item xs={4}>
                                <Input value={this.state.postal_code} onChange={this.handleChangePostal_code} label="Codigo postal" />
                            </Grid>
                            <Grid item xs={6}>
                                <Input value={this.state.administrative_area_level_2} onChange={this.handleChangeAdministrative_area_level_2} label="Provincia" />
                            </Grid>
                            <Grid item xs={6}>
                                <Input value={this.state.locality} onChange={this.handleChangeLocality} label="Poblacion" />
                            </Grid>
                            <Grid item xs={6}>
                                <Input value={this.state.country} onChange={this.handleChangeCountry} label="Pais" />
                            </Grid>
                            <Grid item xs={6}>
                                <Input value={this.state.formatted_phone_number} onChange={this.handleChangeFormatted_phone_number} label="Telefono" />
                            </Grid>
                            <Grid item xs={12}>
                                <Input value={this.state.url} onChange={this.handleChangeUrl} label="Url web" />
                            </Grid>
                            <Grid xs={12} item >
                                <Button onClick={this.handelClickSave} variant="contained" size="small" className="addlocal-buton color-principal">GUARDAR</Button>

                            </Grid>

                        </Grid>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    predictions: state.shopReducer.predictions
  });
  
  const mapDispatchToProps = dispatch => ({
    getPredictions: (value, token) => dispatch(actionGetAutoComplete(value, token)),
    getPlaceById: (id) => dispatch(actionGetPlaceById(id))
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Add);
