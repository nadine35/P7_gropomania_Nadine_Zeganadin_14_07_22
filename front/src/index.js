import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import './styles/index.scss';
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers';
import { getUsers } from './actions/users.actions';

import logger from 'redux-logger';
import thunk from 'redux-thunk';



const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk, logger]
});

store.dispatch(getUsers());


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);