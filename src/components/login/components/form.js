import React from 'react'
import Logo from '../../../img/logo.png'

function form(props) {
  return (
    <form className="Form" onSubmit={props.handleSubmit}>
        <div className="Form-container">
            <div className="Form-logo">
                <img width="40" src={Logo} alt=""/>
            </div>
            <div className="Form-title">Login</div>
            <div className="Form-inputs">
                <input type="text" placeholder="Usuario" />
                <input type="password" placeholder="Contraseña" />
                <div className="Form-button-login">
                    <button type="submit">LOGIN</button>
                </div>
            </div>
        </div>
    </form>
  )
}

export default form
