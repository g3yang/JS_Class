import React from 'react';
import ReactDOM from 'react-dom';
import Timer from './Timer';
import Menu from './Menu';
import {BrowserRouter} from 'react-router-dom';
import App from './components/app';




ReactDOM.render( 
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('root')
);

module.hot.accept();