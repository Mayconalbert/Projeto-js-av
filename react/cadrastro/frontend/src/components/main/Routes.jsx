import React from 'react'

import { Switch, Route, Redirect } from 'react-router-dom'


import Home from '../home/Home'
import UserCrud from '../user/UserCrud'

function MainRoutes(props) {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/user' component={UserCrud} />
            <Redirect from='*' to='/' />
        </Switch>
    )
}

export default MainRoutes