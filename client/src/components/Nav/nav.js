import React from 'react'
import NavTemplates from './navTemplate';

const Nav = () => {

  const navItems = [
      {
          text : 'Apply Leave',
          icon : '',
          link : '/leave/apply',
          restricted : true
      },
      {
          text : 'Leave History',
          icon : '',
          link : '/leave/history',
          restricted : true
      },
      {
          text : 'Holiday Calender',
          icon : '',
          link : '/calendar',
          restricted : true
      },
  ]

  const renderItems = (items) => {
      return items.map((item, i) => (
          <NavTemplates nav={item} key={i} />
      ))
  }

  return (
    <ul className="navbar-nav hk-navbar-content">
        {renderItems(navItems)}
    </ul>
  )
}

export default Nav
