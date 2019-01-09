import React, { Component } from 'react'
import {checkAuth} from '../actions/userActions';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';

import './loader.css';

export default function(ComposedComponent) {
    class Authenticate extends Component {
    
        state = {
            loading : true,
            redirect : false
        }

        componentWillMount() {
            this.props.dispatch(checkAuth())
        }

        componentWillReceiveProps(nextProps) {
            // console.log("Next props", nextProps)
            if (!nextProps.user.login.isAuth) { //If not authorised
                this.props.history.push('/')
            } else { //If authorised
                this.setState({
                    loading : false,
                    redirect : true
                })
            }
        }

        render() {
            // console.log("Auth FE log state", this.state)
            if (this.state.loading) {
                return <div className="preloader-it">
                            <div className="loader-pendulums"></div>
                        </div>
            }
            return (
                this.state.redirect ? <ComposedComponent {...this.props} /> : <Redirect to="/" />
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


