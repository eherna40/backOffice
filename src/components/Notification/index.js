import React from 'react'
import './styles.css'

function Notifications(props) {
  return (
    <div className="notifications" style={{ background: !props.successColor ? '#e53935' : '#00695c'}}>
      <div className="notifications-text">{props.message}</div>
    </div>
  )
}

export default Notifications
