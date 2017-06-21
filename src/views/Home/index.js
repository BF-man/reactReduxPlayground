import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadUsers } from '../../redux/actions/users'
import { getUsersList } from '../../redux/selectors/users'
import User from '../../components/User'
import './index.css'

export class Home extends Component {
  render () {
    const { users, onLoadUsers } = this.props
    return (
      <div className='bf-Home'>
        <div className='bf-Home-usersHeaders'>
          <div>User</div>
          <div>Profession</div>
        </div>
        {users.map((user) => <User key={user.name} {...user} />)}
        <button type='button' onClick={onLoadUsers}>Load users from api</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  users: getUsersList(state)
})

const mapDispatchToProps = dispatch => ({
  onLoadUsers () { dispatch(loadUsers()) }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
