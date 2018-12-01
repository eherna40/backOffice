import React, { Component } from 'react'
import './styles.css'
import { Icon } from 'react-icons-kit'
import {ic_arrow_drop_down} from 'react-icons-kit/md/ic_arrow_drop_down'
import { connect } from 'react-redux'
import { actionLogout } from '../Login/actions';


export class Header extends Component {
	state= {
		menu: [{
			name: 'SALIR',
		}]
	}

	handleClickLogout = () => {
		this.props.setLogout()
	}
	render() {
		
		return (
			<div className="header">
				<div className="header-container">
					<div className="header-title">DESBAR</div>
					<div className="header-nav">
						<div className="header-account-menu">
							<div className="header-name-user">
								<div className="header-avatar">E</div>
								<div className="header-name-user">Emilio</div>
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

export default connect(null, mapDispatchToProps)(Header)
