import React, { Component } from 'react'
import Layout from '../components/layout';
import Form from '../components/form'
import './login.css'

class login extends Component {

  handleSubmit = (e) =>{
    e.preventDefault()
  }

  render() {
    return (
      <Layout>
        <div className="Login">
          <Form handleSubmit={this.handleSubmit} />
        </div>
      </Layout>
    )
  }
}

export default login
