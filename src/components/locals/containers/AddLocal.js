import React, { Component } from 'react'
import Layout from '../components/layout';
import './addlocal.css'
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import Switch from '@material-ui/core/Switch';

import googleApi from '../../../utils/googlemaps'
import Input from '../../widgets/input/Input';
import Grid from '@material-ui/core/Grid';
import DB from '../../../utils/firebase/index'



export class AddLocal extends Component {
    state = {
        switch: true,
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

    }


    handelClickSave = () => {
        DB.addLocal(this.state)
    }


    handleSelectLocal = async (e) => {

        const id = this.state.predictions[0].place_id
        const place = await googleApi.getPlacebyId(id)
        const address = []

        if (place.status === 'OK') {

            for (var i in place.result.address_components) {
                var component = place.result.address_components[i];
                for (var j in component.types) {  // Some types are ["country", "political"]
                    var type_element = component.types[j]

                    //address[type_element] = component.long_name;
                    if (type_element === 'postal_code') {
                        address.postal_code = component.long_name;
                    }
                    if (type_element === 'street_number') {
                        address.street_number = component.long_name;
                    }
                    if (type_element === 'route') {
                        address.route = component.long_name;
                    }
                    if (type_element === 'locality') {
                        address.locality = component.long_name;
                    }
                    if (type_element === 'administrative_area_level_2') {
                        address.administrative_area_level_2 = component.long_name;
                    }
                    if (type_element === 'administrative_area_level_1') {
                        address.administrative_area_level_1 = component.long_name;
                    }
                    if (type_element === 'country') {
                        address.country = component.long_name;
                    }
                    
                }
            }

        }
        this.setState({
            name: place.result.name,
            place_id: place.result.place_id,
            location: place.result.geometry.location,
            url: place.result.url,
            formatted_phone_number: place.result.formatted_phone_number,
            ...address
        })
        this.handleHideAutocomplete()
        this.handleChange()
    }


    handleChangeName = (el) => {
        this.setState({ name: el.target.value })
        this.suggestionText(el)
    }

    handleChangeCountry = (country) => {
        this.setState({
            country
        })

    }


    handleChangeAdministrative_area_level_2 = (administrative_area_level_2) => {
        this.setState({
            administrative_area_level_2
        })
    }

    handleChangeLocality = (locality) => {
        this.setState({
            locality
        })
    }

    handleChangePostal_code = (postal_code) => {
        this.setState({
            postal_code
        })
    }



    suggestionText = (el) => {
        const ref = el.target.value
        const text = ref.split(' ').join('+');
        googleApi.autocomplete(text).then(res => {
            this.setState({
                predictions: res.predictions
            })

        })

    }



    handleChange () {
        const form = document.getElementById('form-addlocal')
        console.log(form.elements)

        for ( var i = 0 ; i < form.elements.length ; i++ ){
           
            if ( form.elements[i].type === 'text' && form.elements[i].type !== ''){
                form.elements[i].nextSibling.classList.add('static')
            }
    
        }
      
      }

      handleChangeFormatted_phone_number = (formatted_phone_number) => {
this.setState({
    formatted_phone_number
})


      }
      handleChangeUrl = (url) => {
        this.setState({url})
        }

    handleHideAutocomplete = (el) => {
        document.getElementById('autocomplete').style.display = 'none'
    }

    handleActiveAutocomplete = (el) => {
        document.getElementById('autocomplete').style.display = 'block'
    }


    handleSwitch = () => {
        this.setState({
            switch: !this.state.switch
        })
    }




    render() {
        return (
            <Layout >
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
                                        this.state.predictions.length > 0 &&

                                    <div className="autocomplete-content" id="autocomplete">
                                        <div className="close-icon-content">
                                            <CloseIcon className="close-icon" />
                                        </div>

                                        {
                                            
                                            this.state.predictions.map((item, index) =>
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
            </Layout>
        )
    }
}

export default AddLocal
