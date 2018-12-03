import React, { Component } from 'react'
import './styles.css'
import Input from '../../components/Input';
import BtnNeutral from '../../components/Buttons/btn-neutral';
import { actionFetchLogin } from './actions';
import { connect } from 'react-redux'
import Notifications from '../../components/Notification';

export class Login extends Component {

    state = {
        email: '',
        password: ''
    }

    handleClickLogin = () =>{
        const { email, password } = this.state
        const values = {
            email,
            password
        }
        this.props.setLogin(values)
    }

    handleChangePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }
    handleChangeUser = (e) => {
        this.setState({
            email: e.target.value
        })
    }

  render() {
      console.log(this.props.sync)
    return (
      <div className="login">
        <div className="container">
            <div className="form-login">
            {
                this.props.error && <Notifications />
            }
                <form className="form-login-container">
                    <Input handleChange = { this.handleChangeUser } value = { this.state.email } label='USUARIO' type='text' styles={{ color: 'grey' }} />
                    <Input handleChange = { this.handleChangePassword } value = { this.state.password } label='PASSWORD' type='password' styles={{ color: 'grey' }} />
                    { !this.props.sync && <BtnNeutral handleClick={ this.handleClickLogin } title='ENTRAR' />}
                </form>
            </div>
        </div>
      </div>
         
    )
  }
}

const mapStateToProps = state => ({
    sync: state.loginReducer.sync,
    isLogged: state.loginReducer.isLogged,
    error: state.loginReducer.error
  });
  
  const mapDispatchToProps = dispatch => ({
    setLogin: (values) => dispatch(actionFetchLogin(values)),
  });

export default connect(mapStateToProps, mapDispatchToProps)(Login)
