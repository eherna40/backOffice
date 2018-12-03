import React, { Component } from 'react'
import './styles.css'
import Toolbar from '../../components/Toolbar';
import Promo from '../../components/Promo/Promo';
import Filter from '../../components/Filter/Filter';
import { actionFetchGetPromos, actionBlockPromo } from './actions';
import { connect } from 'react-redux'
import Loading from '../../components/Loading';

export class Promos extends Component {

    state={
        status: null
    }

    componentDidMount = () => {
        this.props.getPromos()
    }

    handleChangeStatus = (id, active) => {
        const values = { id, active }
        this.props.blockPromo(values)
    }
  render() {
      const { promos } = this.props
    return (
      <div className="promos">
        <div className="container">
            <div className="promos-container">
                <Toolbar link='/promos/add' title="OFERTAS" />
                <div className="promos-wrapper">
                <div className="promos-filter">
                {/* <Filter /> */}
                
                </div>
                <div className="promos-list">
                {
                    this.props.sync
                    ?
                        <Loading />
                    :
                    
                        promos.map(promo => <Promo handleChangeStatus={ this.handleChangeStatus } key={ promo.id } promo={ promo } />)
                    

                }
                    
                    
                </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    promos: state.promosReducer.data,
    sync: state.promosReducer.sync
});

const mapDispatchToProps = dispatch => ({
    getPromos: () => dispatch(actionFetchGetPromos()),
    blockPromo: (id) => dispatch(actionBlockPromo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Promos)
