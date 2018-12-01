import React from 'react'
import './styles.css'
export default function Input(props) {
    const { type, label, styles, value, handleChange } = props;
  return (
     <div className="input-container">
    <div className="input-group">
        <label className="form-label" style={ styles }>
            <p>{label}</p>
        </label>
        <input onChange={ handleChange } value={value} type={type} />
    </div>
</div>
  )
}
