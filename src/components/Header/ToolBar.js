import React from 'react'
import Icon from 'react-icons-kit'
import {ic_notifications} from 'react-icons-kit/md/ic_notifications'
import {ic_email} from 'react-icons-kit/md/ic_email'
import Menu from './Menu'

function ToolBar() {
  return (
    <div className="header-toolbar">
        <div className="header-toolbar-content">
            <div className="header-toolbar-icon">
                <Icon icon={ ic_notifications } size={20} />        
            </div>
            <div className="header-toolbar-icon">
                <Icon icon={ ic_email } size={20} />
            </div>
            <div className="header-toolbar-icon">
                <Menu />
            </div>
        </div>
    </div>
  )
}

export default ToolBar
