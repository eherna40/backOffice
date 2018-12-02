import React, { Component } from 'react'
import './styles.css'
import BtnNeutral from '../../components/Buttons/btn-neutral';
import Toolbar from '../../components/Toolbar';
export class Pages extends Component {
  render() {
    return (
      <div className="pages">
        <div className="container">
            <div className="pages-container">
            <Toolbar title ="PAGINAS" />
                <div className="pages-list">
                    <ul className="ul-format pages-list-container">
                        <li>asdf</li>
                        <li>asf</li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Pages
