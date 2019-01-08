import React,{Component} from 'react'
import LoginHeader from '../../components/Login/header-login';
import LoginSidebar from '../../components/Login/sidebar-login';
import {connect} from 'react-redux';
import {doLogin} from '../../actions/userActions';
import './loginForm.css';


class Login extends Component  {

        state = {
            login : {
                email : '',
                password : '',
                remember : ''
            },
            errors : ''
        }

        handleInput = (event, field) => {
            let newState = {...this.state.login};
            newState[field] = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
            this.setState({
                login: newState,
            })            
        }

        handleSubmitForm = (e) => {
            e.preventDefault();
            if (this.state.login.email === '' && this.state.login.password === '') {
                this.setState({
                    errors : 'Details to daal chutiye'
                })
            } else if (this.state.login.password === '') {
                this.setState({
                    errors : 'Password tera baap dalega'
                })
            } else if (this.state.login.email === '') {
                this.setState({
                    errors : 'Email id to daal bhai'
                })
            } else {
                this.props.dispatch(doLogin(this.state.login))
            }
        }

        componentWillReceiveProps(nextProps) {
            if (nextProps.user.login.isAuth) {
                this.props.history.push('/home');
                this.setState({
                    errors : ''
                })
            } else {
                this.setState({
                    errors : nextProps.user.login.message
                })
            }
        }

        render() {
            return (
                <div>
                    <LoginHeader />
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-6 pl-0 pr-0">
                                <LoginSidebar show={true}/>
                            </div>
                            <div className="col-xl-6 pl-0 pr-0">
                                <div className="auth-form-wrap pl-0 pr-0">
                                    <div className="auth-form">
                                        <h1 className="display-4 mb-10">Welcome Back :)</h1>
                                        <p className="mb-30">Sign in to your account and enjoy unlimited perks.</p>
                                            {this.state.errors === '' ? '' : <p className="has-error">{this.state.errors}</p>}
                                            <form onSubmit={this.handleSubmitForm} className="loginForm">
                                                <div className="form-group">
                                                    <input className="form-control"
                                                           placeholder="Enter email"
                                                           type="email" 
                                                           name="email"
                                                           value={this.state.login.email} 
                                                           onChange={(e) => this.handleInput(e, 'email')} />
                                                </div>
                                                <div className="form-group">
                                                    <input className="form-control" 
                                                            placeholder="Enter password" 
                                                            type="password" 
                                                            name="password"
                                                            value={this.state.login.password}
                                                            onChange={(e) => this.handleInput(e, 'password')} />
                                                </div>
                                                <div className="custom-control custom-checkbox mb-25">
                                                    <input className="custom-control-input" name="remember" id="rememberPassword" type="checkbox" checked={this.state.login.remember}
                                                    onChange={(e) => this.handleInput(e, 'remember')} />
                                                    <label className="custom-control-label font-14" htmlFor="rememberPassword">Keep me logged in</label>
                                                </div>
                                                <button className="btn btn-primary btn-block" type="submit">Login</button>
                                                <p className="forgotPasswordTxt text-center mt-15">Having trouble logging in? Click Here</p>
                                            </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        user : state.user
    }
}

export default connect(mapStateToProps)(Login);