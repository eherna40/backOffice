import React, { Component } from 'react'
import '../../assets/header.css'
import ToolBar from './ToolBar';
import Name from './Name';
import Hamburguer from './Hamburguer';
import { withRouter } from "react-router";



class Header extends Component {
  render() {
return (
        <nav className="header">
            <div className="header-content">
            <div className="d-inline-flex">
                    <Hamburguer />
                    <Name />
                </div>
                <div className="d-inline-flex">
                    <ToolBar />
                </div>
            </div>
        </nav>
    )
  }
}

export default withRouter(Header)
