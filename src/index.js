import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router-dom';
import App from './App';
import history from "./lib/history";
import {Provider} from "react-redux";
import store from "./redux/store";

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App/>
        </Router>
    </Provider>,
    document.getElementById('root')
);

