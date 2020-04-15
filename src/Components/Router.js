import React from 'react';
import {HashRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import Home from "../Routes/Home";
import Search from '../Routes/Search';
import TV from '../Routes/TV';
import Header1 from './Header';
import Detail from '../Routes/Detail';


function Router1(){
    return(
        <Router>
            <>
            <Header1 />
            <Switch>
            <Route path='/' exact component = {Home} />
            <Route path='/Search' exact component = {Search} />
            <Route path='/TV'  exact component = {TV} />
            <Route path='/movie/:id' component = {Detail} />
            <Route path='/tv/:id' component = {Detail} />
            <Redirect from='*' to='/' />
            </Switch>
            </>
        </Router>
            //Router의 Redirect는 Switch없이 하면 무조건 홈으로 불러옴. 모두 exact를 줘도 마찬가지.
    );
};

export default Router1;