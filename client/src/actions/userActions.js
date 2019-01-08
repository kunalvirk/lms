import axios from 'axios';

// User Login action
export function doLogin(user) {
    const response = axios.post('/api/user/login', user)
                          .then(response => response.data)
                          
    return {
        type : 'DO_LOGIN',
        payload : response
    }
}


// Check if a user is authenticated
export function checkAuth() {
    const request = axios.get('/api/user/auth')
                         .then(response => response.data)
                         .catch(err => (
                             {
                                 isAuth : false,
                                 error : err
                            }
                         ))

    return {
        type : 'AUTH_USER',
        payload : request
    }                
}