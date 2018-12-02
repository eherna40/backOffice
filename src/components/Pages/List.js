import React from 'react'
import './list.css'

export default function List(props) {
    const { pages, handleClickSelect } = props
    return (
        <div className="page-list">
            <div className="page-list-container">
                {
                    pages.map(page =>
                        <div id={ page.data().id } onClick={ handleClickSelect } key={page.data().id} className="page-list-page">{page.data().title}</div>
                    )
                }
            </div>


        </div>
    )
}
