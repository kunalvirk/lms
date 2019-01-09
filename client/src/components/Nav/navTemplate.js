import React from 'react';
import {Link} from 'react-router-dom';

const NavTemplates = (props) => {
    
  return (
    <li>
        <Link to={props.nav.link}>
            {props.nav.text}
        </Link>
    </li>
  )
}

export default NavTemplates
