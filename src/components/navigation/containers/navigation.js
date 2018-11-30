import React, { Component } from 'react'
import Layout from '../components/layout';
import NavigationList from '../components/navigationList';
import './navigation.css'


class Navigation extends Component {

    render() {
        console.log(this.props)
        return (
            <Layout>
                <div className="navigation">
                    <div className="navigation-wrapper">
                        <NavigationList />
                    </div>
                </div>
            </Layout>
        )
    }
}


export default Navigation