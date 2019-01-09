import React from 'react';
import FontAwesome from 'react-fontawesome';
import {Link} from 'react-router-dom';

const ProfileDropdown = (props) => {
  
  let user = props.login || '';

  const userMenu = [
      {
          text : 'Profile',
          link : '/user/profile',
          icon : ''
      },
      {
          text : 'Logout',
          link : '/user/logout',
          icon : ''
      }
  ]

  const renderDD = (menus) => {
      return menus.map((menu, i) => (
          <Link to={menu.link} key={i} className="dropdown-item">
            {menu.text}
          </Link>
      ))
  }

  
  return (
    <div className="topBarItems">
        <div className="userProfile">
            <div className="nav-link dropdown-toggle no-caret" id="userDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <div className="media">
                    <div className="media-img-wrap">
                        <div className="avatar">
                            <img src="images/avatar.png" alt="user" className="avatar-img rounded-circle" />
                        </div>
                        <span className="badge badge-success badge-indicator"></span>
                    </div>
                    <div className="media-body">
                        <span>{user !== '' ? user.firstName + ' ' + user.lastName : ''} <i className="zmdi zmdi-chevron-down"></i></span>
                    </div>
                </div>
            </div>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                {renderDD(userMenu)}
            </div>
        </div>
    </div>
  )
}

export default ProfileDropdown
