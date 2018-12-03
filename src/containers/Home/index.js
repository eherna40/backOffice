import React, { Component } from 'react';
//import { Button, Table } from 'semantic-ui-react';
import './styles.css';
import { Icon } from 'react-icons-kit'
import { userPlus } from 'react-icons-kit/feather/userPlus'
import { Link } from 'react-router-dom'
import {u1F3E0} from 'react-icons-kit/noto_emoji_regular/u1F3E0'
import {u1F37B} from 'react-icons-kit/noto_emoji_regular/u1F37B'

class Home extends Component {
	state = {
		items: [
			{
				name: 'Nuevo Usuario',
				link: '/add/user',
				icon: userPlus,
				key: 1

			},
			{
				name: 'Nueva pomo',
				link: 'promos/add',
				icon: u1F37B,
				key: 2
				
			},
			{
				name: 'Nueva Tienda',
				link: 'shop/add',
				icon: u1F3E0,
				key: 3
			}
		]
	}

	render() {

		return (
			<div className="home">
				<div className="container">
					<div className="dashboard-items">
						{
							this.state.items.map(item =>
								<div key={item.key} className="item">
									<Link to={item.link} className="item-content">
										<Icon icon={item.icon} size={30} />
										{item.name}
									</Link >
								</div>
							)
						}

					</div>
				</div>
			</div>
		);
	}
}



export default Home;
