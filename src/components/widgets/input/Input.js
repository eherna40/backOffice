import React from 'react'
import './input.css'


function handleChange (el, func) {
  if ( el.target.value !== ''){
      el.target.nextSibling.classList.add('static')
  }else{
     el.target.nextSibling.classList.remove('static')
  }
  if(func !== undefined){
    func(el.currentTarget.value)

  }

}


function Input(props) {
  return (
    <div className="input-label d-flex align-intems flex-end">
			<input 
				onChange = {(el) => handleChange(el, props.onChange) }
			  value={ props.value === undefined ? '' : props.value}
			  type={props.type}
              placeholder={props.placeholder}
              className="input-label-comp color-secondary" 
			  />
            <label className="label-input color-secondary">{props.label}</label>
        </div>
  )
}

export default Input
