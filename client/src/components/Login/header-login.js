import React from 'react';
import {Link} from 'react-router-dom';
import './login.css';


const LoginHeader = () => {
  return (
        <header className="d-flex justify-content-between align-items-center loginHeader">
            <Link className="d-flex brand" to="/">
                <img className="brand-img" src="images/logo.png" alt="brand" />
            </Link>
            <div className="btn-group btn-group-sm">
                <Link to="/" className="btn btn-outline-secondary">Help</Link>
                <Link to="/" className="btn btn-outline-secondary">About Us</Link>
            </div>
        </header>
  )
}

export default LoginHeader;
