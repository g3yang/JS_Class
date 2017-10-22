import React from 'react';
import ReactDOM from 'react-dom';
import Timer from './Timer';
import Menu from './Menu';

const timer =  <Timer start={Date.now()} />;
const menu = <Menu items={['BMW', 'Audi','Mercedes']} />; 
ReactDOM.render( 
    menu,
    document.getElementById('app')
);

module.hot.accept();