import React from 'react';
import {connect} from 'react-redux';

const Logout = (props) => {
    console.log(props.user.login)
  return (
    <div>
      Logout route
    </div>
  )
}


const mapStateToProps = state => {
    return {
        state : state.user
    }
}

export default connect(mapStateToProps)(Logout);
