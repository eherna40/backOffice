import React from 'react'
import './headerToolbar.css'
import SelectOrder from '../select/SelectOrder';
import AddBtn from '../addbtn/AddBtn';
import Search from '../search/Search';

function HeaderToolbar(props) {
  return (
    <div className="header-toolbar">
        <div className="header-toolbar-title color-principal">
            Locales
        </div>
        <div className="header-toolbar-widgets  d-flex align-items-flex-end justify-content-space-between">
            <div className="d-flex align-items-flex-end header-toolbar-left">
            <div className="header-toolbar-widgets-order toolbar-widget">
                <SelectOrder />
            </div>
            <div className="header-toolbar-widgets-search toolbar-widget">
                <Search />
            </div>
            
            </div>
            <div className="header-toolbar-widgets-add toolbar-widget">
                <AddBtn routeLink = {props.routeLink} />
            </div>
        </div>
    </div>
  )
}

export default HeaderToolbar

