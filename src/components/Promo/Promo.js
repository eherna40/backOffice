import React from 'react'
import './styles.css'
import BtnNeutral from '../Buttons/btn-neutral';
import { Switch } from '@material-ui/core';



export default function Promo(props) {
    const { handleChangeStatus } = props
    const { id  } = props.promo
    const { active, category, nameLocal, title, price} = props.promo
    let status = active
    return (
        <div className="promo">
            <div className="promo-container">
                <div className="promo-items-content">
                    <div className="promo-item-active" style={{ background: status ? '#b9f6ca' : '#ff8a80' }}>
                        <div className="promo-active-text">{ status ? 'VISIBLE ' : 'OCULTO' }</div>
                    </div>
                    <div className="promo-item promo-item-name promo-item-border">
     
                            <div className="promo-item-label">Titulo</div>
                            <div className="promo-item-text-content">
                                <div className="promo-item-text">{ title }</div>
                            </div>
                            <div className="promo-item-label">Tienda</div>
                            <div className="promo-item-text-content">
                                <div className="promo-item-text">{ nameLocal }</div>
                            </div>
            
                    </div>
                    <div className="promo-item promo-item-price promo-item-border">
               
                        <div className="promo-item-text-price">{ price }€</div>
                        
   
                    </div>
                    <div className="promo-item promo-item-category">
                        <div className="promo-item-label">Categoria</div>
                        <div className="promo-item-text">Desayunos</div>
                    </div>
                    <div className="promo-item promo-item-button">
                        <Switch checked={ status } onChange={() => handleChangeStatus(id,active)}/>
                    </div>
                    <div className="promo-item promo-item-button">
                        <BtnNeutral title="Editar" />
                    </div>
                    
                </div>
            </div>

        </div>
    )
}
