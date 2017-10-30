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



/**
const Greeting = ({name, salut, children}) => (
    <div>
        {salut}, {name}
        {children}
    </div>
);

const Rectangle = ({length, width}) =>(
    <div> 
        The dimension is {length} * {width}
    </div>
)

const Square = ({side}) => (
    <Rectangle length={side} width={side} />
)


ReactDOM.render(
    <Square side="10"/>,    
    document.getElementById('root')
);
*/


module.hot.accept();