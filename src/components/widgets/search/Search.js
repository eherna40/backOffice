import React from 'react'
import './search.css'


 function onChange (el) {
     console.log(el.target.value)
     if ( el.target.value !== ''){
         el.target.nextSibling.classList.add('static')
     }else{
        el.target.nextSibling.classList.remove('static')
     }
}

function Search() {

  return (
    <div className="input-search">
        <form className="form-input-search d-flex align-intems flex-end">
            <input className="search-input color-secondary" onBlur={ onChange }/>
            <label className="label-input-search color-secondary">Buscar</label>
        </form>
    </div>
    )
}

export default Search
