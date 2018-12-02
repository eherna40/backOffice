import React from 'react'
import Avatar from '../../assets/avatares/avatar1.png'
import './styles.css'
import social from '../../assets/social/facebook.png'
import Switch from '@material-ui/core/Switch';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import Edition from './Edition';    




export default function User(props) {
    let { id,email, active, handleClickSelect, handleClickBlock } = props
    const ref = 'editing' + id
    return (
        <div className="user">
            <div className="user-info">
                <div className="user-avatar user-item user-item-one">
                    <div className="user-avatar-image">
                        <img src={Avatar} width='60' alt='' />
                    </div>
                </div>
                <div className="user-email user-item user-item-two">
                    {email}
                </div>
                <div className="user-type user-item user-item-three">
                    <img width='30' src={social} alt='' />
                </div>
                <div className="user-block user-item user-item-five">
                    <Switch checked={active} onChange={ () => handleClickBlock (id, active)} />
                </div>
                <div className="user-edit user-item-six">
                    <IconButton style={{ background: '#9bc2db', color: 'white' }} onClick={ () =>  handleClickSelect(id) }>
                        <EditIcon fontSize="small" />
                    </IconButton>
                </div>
            </div>
            <div id={ref} className={'editing-view'}>
            <Edition email= {email} id={id}/>
            </div>
        </div>
    )
}
