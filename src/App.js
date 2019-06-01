import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './components/home/Home';
import About from './components/about/About';
import Header from './components/common/Header';
import PageNotFound from './components/notfound/PageNotFound';

/**
 * State - simple
 */
let s = {name: 'David'}
let newState = Object.assign({}, s, {name: 'David Shams'})

export default function App() {
    return (
        <div>
            <div className="container-fluid">
                <Header />
                {JSON.stringify(newState)}
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact about="/about" component={About} />
                    <Route exact about="/about" component={PageNotFound} />
                </Switch>
            </div>
            Application
        </div>
    )
}
