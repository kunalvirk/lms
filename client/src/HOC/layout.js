import React from 'react';
import {Link} from 'react-router-dom';
import './layout.css';
import {connect} from 'react-redux';
import ProfileDropdown from '../components/Nav/Profile/profile';

const Layout = (props) => {
  console.log("Layout Props" , props)
  return (
    <React.Fragment>
        <div className="navbar navbar-expand-xl navbar-light fixed-top hk-navbar">
            <Link to="/" className="navbar-brand">
                <img src="images/logo.png" alt="" />
            </Link>
            <ul className="navbar-nav hk-navbar-content">
                <li>
                    <ProfileDropdown {...props.user} />
                </li>
            </ul>
        </div>
        <div>
            {props.children}
        </div>
    </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        user : state.user
    }
}

export default connect(mapStateToProps)(Layout);
