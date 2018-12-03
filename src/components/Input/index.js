import React from 'react'
import './styles.css'

export default function Input(props) {

    const { placeautocomplete, getInputProps, styleInput, type, label, styles, value, handleChange, handleFocusAutoComplete, defaultValue, handleBlur, name } = props;
    return (
        <div className="input-container">
            <div className="input-group">
                <label className="form-label" style={styles}>
                    <p>{label}</p>
                </label>
                {
                    placeautocomplete
                        ?

                        <input
                            style={{ styleInput }}
                            defaultValue={defaultValue}
                            name={name}
                            onFocus={handleFocusAutoComplete}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={value} 
                            type={type}
                            {...getInputProps({
                                className: 'location-search-input',
                                name: 'name'
                            })} />

                        :
                        <input style={{ styleInput }} defaultValue={defaultValue} name={name} onFocus={handleFocusAutoComplete} onChange={handleChange} onBlur={handleBlur} value={value} type={type} />
                }
            </div>
        </div>
    )
}
