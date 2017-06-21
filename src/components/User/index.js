import React, { PureComponent } from 'react'
import './index.css'

export default class User extends PureComponent {
  constructor (props) {
    super(props)
    this.state = { selected: false }
  }
  handleClick = () => {
    this.setState({ selected: !this.state.selected })
  }
  cssClass = () => {
    const { selected } = this.state
    return `bf-User ${selected ? 'bf-User--selected' : ''}`
  }
  render () {
    const { name, profession } = this.props
    return (
      <div
        className={this.cssClass()}
        onClick={this.handleClick} >
        <div className='bf-User-name'>{name}</div>
        <div className='bf-User-profession'>{profession}</div>
      </div>
    )
  }
}
