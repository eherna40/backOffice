import React from 'react'
import { Route, Redirect } from 'react-router'
import Shops from '../containers/Shops';
import AddShop  from '../containers/Shops/Add';


export default function PrivateRoutes(props) {
    return (
        <div>       
            <Route path="/shops" name="Shops" component={Shops} /> 
            <Route path='/shops/add' exact component={AddShop} />     
        </div>


    )
}
