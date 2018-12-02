import React, { Component } from 'react'
import './add.css'
import FormPromo from '../../components/Forms/FormPromo';
import { history } from '../../store';
import { actionFetchAddPromo } from './actions';
import { connect } from 'react-redux'

export class Add extends Component {


    state = {
        title: '',
        price: '',
        categories: [],
        locals: [],
        categorySelected: '',
        localSelected: '',
        active:true
    }


    handleChangeText = (el) =>{
        this.setState({
            [el.target.name] : el.target.value
        })
    }

    handleChageActive =() => this.setState({ active: !this.state.active})

    handleClickSave = () => {
        const promo ={
            active: this.state.active,
            price: this.state.price,
            category: this.state.categorySelected,
            local: this.state.localSelected,
            title: this.state.title
        }
        console.log(promo)
        this.props.addPromo(promo)
    }

    handleClickClose = () => {
        history.goBack()
    }

  render() {
    return (
      <div className="promo-add">
        <div className="promo-add-container">
            <FormPromo 
            title={this.state.title} 
            price={this.state.price} 
            active={this.state.active}  
            handleChangeText= { this.handleChangeText } 
            handleClickSave={ this.handleClickSave } 
            locals={this.state.locals}
            localSelected={this.state.localSelected}
            categories={this.state.categories}
            categorySelected={this.state.categorySelected}
            handleClickClose={this.handleClickClose}
            handleChageActive={this.handleChageActive}
            />
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => ({
    sync: state.promosReducer.sync
});

const mapDispatchToProps = dispatch => ({
	addPromo: (promo) => dispatch(actionFetchAddPromo(promo))
});

export default connect(mapStateToProps, mapDispatchToProps)(Add)
