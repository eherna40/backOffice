import React from 'react'
import Logo from '../../assets/logo.png'
import './styles.css'

export default function Loading() {
  return (
    <div className="loading">
        <div className="loading-img">
            <img src={Logo} alt=''/>
        </div>
    </div>
  )
}
