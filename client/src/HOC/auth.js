import React, { Component } from 'react'
import {checkAuth} from '../actions/userActions';
import { connect } from 'react-redux';

import './loader.css';

export default function(ComposedComponent) {
    class Authenticate extends Component {
    
        state = {
            loading : true
        }

        componentWillMount() {
            this.props.dispatch(checkAuth())
        }

        componentWillReceiveProps(nextProps) {
            this.setState({
                loading : false
            })
            console.log("Next props", nextProps)
            if (!nextProps.user.isAuth) { //If not authorised
                this.props.history.push('/')
            } else { //If authorised
                this.props.history.push(this.props.match.path)
            }
        }

        render() {
            console.log("Auth FE log ", this.props)
            if (this.state.loading) {
                return <div className="preloader-it">
                            <div className="loader-pendulums"></div>
                        </div>
            }
            return (
                <ComposedComponent {...this.props} />
            )
        }
    }

    function mapStateToProps(state) {
        console.log("Auth ",state)
        return {
            user : state.user
        }
    }

    return connect(mapStateToProps)(Authenticate)
}


