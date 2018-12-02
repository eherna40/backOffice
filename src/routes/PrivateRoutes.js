import React from 'react'
import { Route } from 'react-router'
import Shops from '../containers/Shops';
import AddShop from '../containers/Shops/Add';
import Users from '../containers/Users';
import Pages from '../containers/Pages';
import Promos from '../containers/Promos';
import AddPromo from '../containers/Promos/Add'


export default function PrivateRoutes(props) {
    return (
        <div>       
            <Route path="/shops" name="Shops" component={Shops} /> 
            <Route path='/shops/add' exact component={AddShop} />  
            <Route path='/users' exact component={Users} />   
            <Route path='/pages' exact component={Pages} />
            <Route path='/promos' component={Promos} />  
            <Route path='/promos/add' component={AddPromo} />
        </div>


    )
}
