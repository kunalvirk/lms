import React from 'react';
import {Switch, Route} from 'react-router-dom';

// Import components
import Login from '../pages/Login/login';
import Layout from '../HOC/layout';
import Home from '../pages/Home/home';

// HOC
import Auth from '../HOC/auth';


const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Login} />
            <Layout>
                <Route path='/home' component={Auth(Home)} />
            </Layout>
        </Switch>
    )
}

export default Routes;
