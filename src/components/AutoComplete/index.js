import React from 'react'
import './styles.css'
import { Item } from 'semantic-ui-react';

function AutoComplete(props) {
    const { predictions, visible, handleSelectClick } = props

    return (
        <div className="autocomplete" style={{ display: visible ? 'block' : 'none'}}>
            <div className="autocomplete-container">
                
                {
                    predictions.map(item =>  
                        <div key={item.place_id} onClick={() => handleSelectClick(item.place_id)} className="autocomplete-prediction">
                        <div className="autocomplete-prediction-title">{item.structured_formatting.main_text}</div>
                        <div className="auctocomplete-prediction-address">{item.structured_formatting.secondary_text}</div>

                </div>
                    )
                }
                
            </div>
        </div>
    )
}

export default AutoComplete
