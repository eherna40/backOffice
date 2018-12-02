import React, { Component } from 'react'
import './styles.css'
import BtnNeutral from '../../components/Buttons/btn-neutral';
import Toolbar from '../../components/Toolbar';
import { connect } from 'react-redux'
import { actionFetchGetPages, actionFetchSetPages } from './actions';
import List from '../../components/Pages/List';
import Content from '../../components/Pages/Content';

export class Pages extends Component {


	state = {
		selected: 0,
		content: '',
		isModificated: false
	}
	componentDidMount = () => {
		this.props.getPages()
	}

	handleChangeText = (el) => {
		this.setState({
			isModificated: true,
			[el.target.name] : el.target.value
		})
	}
	handleSet = (id) => {
		const values = {
			content: this.textRef.value,
			id: id
		}

		this.props.setPage(values)
	}

	handleClickSelect = (el) => {
		this.setState({
			selected: el.target.id,
			isModificated: false,
		})
	}
	render() {
		const { pages } = this.props
		return (
			<div className="pages">
				<div className="container">
					<div className="pages-container">
						<Toolbar title="PAGINAS" />
						
						{
							pages.length > 0 &&
							<div className="pages-wrapper">
							<div className="pages-list">
								<List handleClickSelect= { this.handleClickSelect } pages={pages} />
							</div>
							<div className="pages-content">
								<Content textRef={el =>  this.textRef = el } handleSet={ this.handleSet } isModificated={ this.state.isModificated} content={this.state.content} handleValue={ this.handleValue } handleChange={ this.handleChangeText } page= {pages[this.state.selected]} />
							</div>
						</div>
						}
							

					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	pages: state.pagesReducer.data
});

const mapDispatchToProps = dispatch => ({
	getPages: () => dispatch(actionFetchGetPages()),
	setPage: (values) => dispatch(actionFetchSetPages(values))
});

export default connect(mapStateToProps, mapDispatchToProps)(Pages)

