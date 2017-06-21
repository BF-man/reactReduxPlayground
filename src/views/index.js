import React, { Component } from 'react'
import { connect } from 'react-redux'
import './index.css'

export class Layout extends Component {
  render () {
    return (
      <div className='bf-Layout'>
        <div className='bf-Layout-content'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default connect(null)(Layout)
