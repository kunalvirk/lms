import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import {BrowserRouter} from 'react-router-dom';
import Routes from './routes';
// Get all reducers
import rootReducer from './reducers';

// Define common state store
const appStore = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore)

const App = () => {
    return (
        <Provider store={appStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </Provider>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
