import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Schedule from './schedule'
import Home from './home'

const Main = () => (
    <Switch>
        <Route exact path = '/' component = {Home} />
        <Route path = '/schedule' component = {Schedule} />
    </Switch>
)

export default Main
