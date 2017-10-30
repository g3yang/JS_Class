import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Schedule from './schedule';
import Home from './home';
import Students from './students';

const Main = () => (
    <Switch>
        <Route exact path = '/' component = {Home} />
        <Route path = '/schedule' component = {Schedule} />
        <Route path = '/students' component={Students}/>
    </Switch>
)

export default Main
