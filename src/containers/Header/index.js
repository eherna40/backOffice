import React, { Component } from 'react'
import './styles.css'
import { Icon } from 'react-icons-kit'
import {ic_arrow_drop_down} from 'react-icons-kit/md/ic_arrow_drop_down'
import { connect } from 'react-redux'
import { actionLogout } from '../Login/actions';
import { history } from '../../store';
import Logo from '../../assets/logo.png'



export class Header extends Component {
	state= {
		menu: [{
			name: 'SALIR',
		}]
	}

	handleClickLogout = () => {
		this.props.setLogout()
		history.replace('/')
	}

		render() {
			console.log(this.props)
		const { email } = this.props.user
		return (
			<div className="header">
				<div className="header-container">

					<div className="header-title">
						<img alt='' src={Logo}  width='25'/>DESBAR
					</div>
					<div className="header-nav">
						<div className="header-account-menu">
							<div className="header-name-user-content">
								<div className="header-avatar">{ email.charAt(0) }</div>
								<div className="header-name-user">{ email }</div>
								<Icon icon={ic_arrow_drop_down} />
							</div>
							<div className='header-nav-container'>
								<ul className='ul-format'>
								{
									this.state.menu.map((item, index )=> <li onClick={ this.handleClickLogout} key={index} >{item.name}</li>)
								}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}


  
  const mapDispatchToProps = dispatch => ({
    setLogout: (values) => dispatch(actionLogout()),

  });

  const mapStateToProps = state => ({
	user: state.loginReducer.user,
});

export default connect(mapStateToProps, mapDispatchToProps)(Header)
