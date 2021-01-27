import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from '../pages/home/Home'
import Searcher from '../pages/searcher/Searcher'
import Simulator from '../pages/simulator/Simulator'
import DataEmpresa from '../pages/dataEmpresa/DataEmpresa'

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/home' component={Home}/> 
                <Route exact path='/searcher' component={Searcher}/> 
                <Route exact path='/simulator' component={Simulator}/> 
                <Route exact path='/data' component={DataEmpresa}/> 
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;