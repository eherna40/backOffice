import React from 'react'
import { Route, Redirect } from 'react-router'
import Shops from '../containers/Shops';


export default function PrivateRoutes(props) {
    return (
        <div>       
            <Route path="/shops" exact={true} name="Shops" component={Shops} />      
        </div>


    )
}
