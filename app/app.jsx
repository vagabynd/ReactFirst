import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/nav.jsx';
import Home from './components/home.jsx';
import Companies from './components/Companies.jsx';
import Phones from './components/Phones.jsx';
import NotFound from './components/notfound.jsx';

ReactDOM.render(
    <Router>
        <div>
            <Nav />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/companies" component={Companies} />
                <Route exact0 path="/phones" component={Phones}/>
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>,
    document.getElementById("app")
)