import React from 'react'
import Input from '../Input'
import Avatar from '../../assets/avatares/avatar1.png'
import './edition.css'
import BtnNeutral from '../Buttons/btn-neutral';

export default function Edition(props) {
    const { id, email } = props
    return (
        <div className="edition">
            <div className="edition-container">
                <div className="edition-avatar">
                    <img src={Avatar} width='100' alt='' />
                </div>
                <div className="edition-content">
                    <div className="edition-data">
                        <div className="edition-label">ID</div>
                        <div className="edition-id">{id}</div>
                    </div>
                    <div className="edition-input">
                        <Input name='email' label="EMAIL" defaultValue={ email }/>
                    </div>
                </div>
                <div className="edition-button">
                    <BtnNeutral title="RESET CONTRASEÑA" style={{fontWeight: 'bold', fontSize: '10px'}}/>
                    <BtnNeutral title='ELIMINAR' />
                </div>

            </div>
        </div>
    )
}
