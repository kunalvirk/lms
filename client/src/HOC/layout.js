import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

export default class Layout extends Component {

    constructor(props) {
        super(props)
    }

  render() {
    return (
    <React.Fragment>
        <nav className="navbar navbar-expand-xl navbar-light fixed-top hk-navbar">
            This is gonna be nav
        </nav>
        <div>
            {this.props.children}
        </div>
    </React.Fragment>
    )
  }
}
