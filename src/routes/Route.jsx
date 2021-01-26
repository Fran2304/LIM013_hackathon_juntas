import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from '../pages/home/Home'
import Searcher from '../pages/searcher/Searcher'

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/home' component={Home}/> 
                <Route exact path='/searcher' component={Searcher}/> 
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;