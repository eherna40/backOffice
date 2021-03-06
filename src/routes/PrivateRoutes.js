import React from 'react'
import { Route } from 'react-router'
import Shops from '../containers/Shops';
import AddShop from '../containers/Shops/Add';
import Users from '../containers/Users';
import Pages from '../containers/Pages';
import Promos from '../containers/Promos';
import AddPromo from '../containers/Promos/Add'
import Home from '../containers/Home';
import EditShop from '../containers/Shops/Edit'


export default function PrivateRoutes(props) {
    return (
        <div>       
            <Route path="/shops" exact name="Shops" component={Shops} /> 
            <Route path='/shop/add' component={AddShop} />  
            <Route path='/users' exact component={Users} />   
            <Route path='/pages' exact component={Pages} />
            <Route path='/promos' exact component={Promos} />  
            <Route path='/promos/add' component={AddPromo} />
            <Route path='/dashboard' exact component={Home} />
            <Route path='/shops/edit/:id' exact component={EditShop} />
        </div>

    )
}
