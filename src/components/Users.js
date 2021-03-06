import React, { Component } from 'react';
// add any needed imports here
import { connect } from 'react-redux'
class Users extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
        {this.props.userCount}
        <ul>
          Users!
          {this.props.users.map(user => <li key={user.username}>{`${user.username}, ${user.hometown}`}</li>)}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return { 
    users: state.users,
    userCount:state.users.length
  }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
